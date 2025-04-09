# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from django.db import connection
from django.contrib.auth import authenticate, login
from authentication.forms import LoginForm, SignUpForm

# bibliotecas para recuperacao de senha
import datetime
from django.utils import timezone
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.views import generic
from django.views.decorators.debug import sensitive_post_parameters
from accounts.models import User
from .forms import PasswordRecoveryForm, PasswordResetForm
from .signals import user_recovers_password
from .tokens import account_activation_token
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
from django.urls import reverse, reverse_lazy
from django.shortcuts import render
from django.template import loader
from django.core import signing
from django.http import Http404
from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404, redirect
from django.utils.decorators import method_decorator
from django.contrib.auth import login, get_user_model
from teste_usuario import settings


# Login
def login_view(request):
    form = LoginForm(request.POST or None)
    msg = None
    ola = None

    hour = datetime.datetime.now().hour
    if (hour >= 6) and (hour < 12):
        ola = "Bom dia"
    elif (hour >= 12) and (hour < 18):
        ola = "Boa tarde"
    elif (hour >= 18) and (hour < 23):
        ola = "Boa noite"
    else:
        ola = "Boa madrugada"

    if request.method == "POST":

        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)

                cursor = connection.cursor()

                cursor.execute('''UPDATE accounts_user
                                SET is_online = 1
                                WHERE id = %s;''', [user.id])

                cursor.fetchall()

                cursor.close()

                return redirect("/")
            else:
                msg = 'Credenciais incorretas'
        else:
            msg = 'Error validating the form'

    return render(request, "accounts/login.html", {"form": form, "msg": msg, "ola": ola})


# Registo
def register_user(request):
    msg     = None
    success = False

    hour = datetime.datetime.now().hour
    if (hour >= 6) and (hour < 12):
        ola = "Bom dia"
    elif (hour >= 12) and (hour < 18):
        ola = "Boa tarde"
    elif (hour >= 18) and (hour < 21):
        ola = "Boa noite"

    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password1")
            user = authenticate(username=username, password=raw_password)

            msg     = 'User created - please <a href="/login">login</a>.'
            success = True
            
            #return redirect("/login/")

        else:
            msg = 'Form is not valid'    
    else:
        form = SignUpForm()

    return render(request, "accounts/register.html", {"form": form, "msg" : msg, "success" : success, "ola": ola })


# Recuperacao de Senha
def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):

        user.is_active = True
        user.save()
        return redirect('login')
    else:
        return HttpResponse('Activation link is invalid!')


class SaltMixin(object):
    salt = 'password_recovery'
    url_salt = 'password_recovery_url'


def loads_with_timestamp(value, salt):
    """Returns the unsigned value along with its timestamp, the time when it
    got dumped."""
    try:
        signing.loads(value, salt=salt, max_age=-999999)
    except signing.SignatureExpired as e:
        age = float(str(e).split('Signature age ')[1].split(' >')[0])
        timestamp = timezone.now() - datetime.timedelta(seconds=age)
        return timestamp, signing.loads(value, salt=salt)


class RecoverDone(SaltMixin, generic.TemplateView):
    template_name = 'password_reset/reset_sent.html'

    def get_context_data(self, **kwargs):
        ctx = super(RecoverDone, self).get_context_data(**kwargs)
        try:
            ctx['timestamp'], ctx['email'] = loads_with_timestamp(
                self.kwargs['signature'], salt=self.url_salt,
            )
        except signing.BadSignature:
            raise Http404
        return ctx

recover_done = RecoverDone.as_view()


class Recover(SaltMixin, generic.FormView):
    case_sensitive = True
    form_class = PasswordRecoveryForm
    template_name = 'password_reset/recovery_form.html'
    success_url_name = 'password_reset_sent'
    email_template_name = 'password_reset/recovery_email.txt'
    email_subject_template_name = 'password_reset/recovery_email_subject.txt'
    search_fields = ['username', 'email']


    def get_success_url(self):
        return reverse(self.success_url_name, args=[self.mail_signature])

    def get_context_data(self, **kwargs):
        kwargs['url'] = self.request.get_full_path()
        return super(Recover, self).get_context_data(**kwargs)

    def get_form_kwargs(self):
        kwargs = super(Recover, self).get_form_kwargs()
        kwargs.update({
            'case_sensitive': self.case_sensitive,
            'search_fields': self.search_fields,
        })
        return kwargs

    def get_site(self):
        return get_current_site(self.request)

    def send_notification(self):
        context = {
            'site': self.get_site(),
            'user': self.user,
            'username': self.user.get_username(),
            'token': signing.dumps(self.user.pk, salt=self.salt),
            'secure': self.request.is_secure(),
        }
        body = loader.render_to_string(self.email_template_name,
                                       context).strip()
        subject = loader.render_to_string(self.email_subject_template_name,
                                          context).strip()

        send_mail(subject, body, settings.DEFAULT_FROM_EMAIL,
                  [self.user.email])

    def form_valid(self, form):
        self.user = form.cleaned_data['user']
        self.send_notification()
        if (
                len(self.search_fields) == 1 and
                self.search_fields[0] == 'username'
        ):
            # if we only search by username, don't disclose the user email
            # since it may now be public information.
            email = self.user.username
        else:
            email = self.user.email
        self.mail_signature = signing.dumps(email, salt=self.url_salt)
        return super(Recover, self).form_valid(form)


recover = Recover.as_view()


class Reset(SaltMixin, generic.FormView):
    form_class = PasswordResetForm
    token_expires = None
    template_name = 'password_reset/reset.html'
    success_url = reverse_lazy('password_reset_done')

    def get_token_expires(self):
        duration = getattr(settings, 'PASSWORD_RESET_TOKEN_EXPIRES',
                           self.token_expires)
        if duration is None:
            duration = 3600 * 48  # Two days
        return duration

    @method_decorator(sensitive_post_parameters('password1', 'password2'))
    def dispatch(self, request, *args, **kwargs):
        self.request = request
        self.args = args
        self.kwargs = kwargs
        self.user = None

        try:
            pk = signing.loads(kwargs['token'],
                               max_age=self.get_token_expires(),
                               salt=self.salt)
        except signing.BadSignature:
            return self.invalid()

        self.user = get_object_or_404(get_user_model(), pk=pk)
        return super(Reset, self).dispatch(request, *args, **kwargs)

    def invalid(self):
        return self.render_to_response(self.get_context_data(invalid=True))

    def get_form_kwargs(self):
        kwargs = super(Reset, self).get_form_kwargs()
        kwargs['user'] = self.user
        return kwargs

    def get_context_data(self, **kwargs):
        ctx = super(Reset, self).get_context_data(**kwargs)
        if 'invalid' not in ctx:
            ctx.update({
                'username': self.user.get_username(),
                'token': self.kwargs['token'],
            })
        return ctx

    def form_valid(self, form):
        form.save()
        user_recovers_password.send(
            sender=get_user_model(),
            user=form.user,
            request=self.request
        )
        return redirect(self.get_success_url())


reset = Reset.as_view()


class ResetDone(generic.TemplateView):
    template_name = 'password_reset/recovery_done.html'


reset_done = ResetDone.as_view()
