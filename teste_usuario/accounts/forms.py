# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django import forms
from django.contrib.auth import authenticate, get_user_model
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from accounts.models import User
from django.core.validators import validate_email
from django.db.models.query_utils import Q
from teste_usuario import settings


class MyUserCreationForm(forms.ModelForm):
    """
    A form that creates a user, with no privileges, from the given username and
    password.
    """
    error_messages = {
        'duplicate_email': ("A user with this email already exists."),
        'password_mismatch': ("The two password fields didn't match."),
    }
    first_name = forms.CharField(label=("Nome"),
                                 widget=forms.TextInput(attrs={'placeholder': 'Nome'}))
    last_name = forms.CharField(label=("Sobrenome"),
                                 widget=forms.TextInput(attrs={'placeholder': 'Sobrenome'}))
    email = forms.CharField(label=("E-mail"),
                                widget=forms.EmailInput(attrs={'placeholder': 'E-mail'}))
    password1 = forms.CharField(label=("Password"),
                                widget=forms.PasswordInput(attrs={'placeholder': 'Senha'}))
    password2 = forms.CharField(label=("Password confirmation"),
                                widget=forms.PasswordInput(attrs={'placeholder': 'Confirmar Senha'}),
                                help_text=("Enter the same password as above, for verification."))

    class Meta:
        model = User
        fields = ("email", "first_name", "last_name")

    def clean_email(self):
        # Since User.email is unique, this check is redundant,
        # but it sets a nicer error message than the ORM. See #13147.
        email = self.cleaned_data["email"]
        try:
            User._default_manager.get(email=email)
        except User.DoesNotExist:
            return email
        raise forms.ValidationError(self.error_messages['duplicate_email'])

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError(
                self.error_messages['password_mismatch'])
        return password2

    def save(self, commit=True):
        user = super(MyUserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class MyUserChangeForm(forms.ModelForm):
    email = forms.RegexField(
        label=("Email"), max_length=30, regex=r"^[\w.@+-]+$",
        help_text=("Required. 30 characters or fewer. Letters, digits and "
                    "@/./+/-/_ only."),
        error_messages={
            'invalid': ("This value may contain only letters, numbers and "
                         "@/./+/-/_ characters.")})
    password = ReadOnlyPasswordHashField(label=("Password"),
                                         help_text=("Raw passwords are not stored, so there is no way to see "
                                                     "this user's password, but you can change the password "
                                                     "using <a href=\"password/\">this form</a>."))

    class Meta:
        model = User
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(MyUserChangeForm, self).__init__(*args, **kwargs)
        f = self.fields.get('user_permissions', None)
        if f is not None:
            f.queryset = f.queryset.select_related('content_type')

    def clean_password(self):
        # Regardless of what the user provides, return the initial value.
        # This is done here, rather than on the field, because the
        # field does not have access to the initial value
        return self.initial["password"]


# from django.contrib.auth.models import User
class RegistrarUsuarioForm(forms.Form):
    nome = forms.CharField(required=True)
    type = forms.CharField(required=True)
    stealth = forms.CharField(required=True)
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True, error_messages={
        'required': 'E-mail required', 'invalid': 'Invalid e-mail'})
    senha = forms.CharField(min_length=8, required=True, error_messages={
        'required': 'Password required', 'invalid': 'Invalid password'})
    MIN_LENGTH = 8


    def is_valid(self):
        password = self.data['senha']
        mail = self.data['email'].lower()
        first_name = self.data['first_name']
        last_name = self.data['last_name']

        valid = True

        if not super(RegistrarUsuarioForm, self).is_valid():
            self.adiciona_erro('Please check fields')
            valid = False

        import re
        match = re.match('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$', mail)

        if match == None:
            self.adiciona_erro('Invalid e-mail format')
            valid = False

        if len(mail) == 0:
            self.adiciona_erro('Empty e-mail')
            valid = False

        if len(first_name) == 0:
            self.adiciona_erro('Empty name')
            valid = False

        if len(last_name) == 0:
            self.adiciona_erro('Empty surname')
            valid = False

        if len(password) == 0:
            self.adiciona_erro('Empty password')
            valid = False

        if len(password) < self.MIN_LENGTH:
            self.adiciona_erro('Password must contain at least 8 characters')
            valid = False

        user_exists = User.objects.filter(email=self.data['email'].lower()).exists()

        if user_exists:
            self.adiciona_erro('User already exist')
            valid = False

        return valid

    def adiciona_erro(self, message):
        errors = self._errors.setdefault(forms.forms.NON_FIELD_ERRORS, forms.util.ErrorList())
        errors.append(message)


class PasswordRecoveryForm(forms.Form):
    username_or_email = forms.CharField()

    error_messages = {
        'not_found': ("Sorry, this user doesn't exist."),
    }

    def __init__(self, *args, **kwargs):
        self.case_sensitive = kwargs.pop('case_sensitive', True)
        search_fields = kwargs.pop('search_fields', ('username', 'email'))
        super(PasswordRecoveryForm, self).__init__(*args, **kwargs)

        message = ("No other fields than username and email are supported "
                   "by default")
        if len(search_fields) not in (1, 2):
            raise ValueError(message)
        for field in search_fields:
            if field not in ['username', 'email']:
                raise ValueError(message)

        labels = {
            'username': ('Username'),
            'email': ('Email'),
            'both': ('Username or Email'),
        }
        User = get_user_model()  # noqa
        if getattr(User, 'USERNAME_FIELD', 'username') == 'email':
            self.label_key = 'email'
        elif len(search_fields) == 1:
            self.label_key = search_fields[0]
        else:
            self.label_key = 'both'
        self.fields['username_or_email'].label = labels[self.label_key]

    def clean_username_or_email(self):
        username = self.cleaned_data['username_or_email']
        cleaner = getattr(self, 'get_user_by_%s' % self.label_key)
        self.cleaned_data['user'] = user = cleaner(username)

        user_is_active = getattr(user, 'is_active', True)
        recovery_only_active_users = getattr(settings,
                                             'RECOVER_ONLY_ACTIVE_USERS',
                                             False)

        if recovery_only_active_users and not user_is_active:
            raise forms.ValidationError(("Sorry, inactive users can't "
                                          "recover their password."))

        return username

    def get_user_by_username(self, username):
        key = 'username__%sexact' % ('' if self.case_sensitive else 'i')
        User = get_user_model()
        try:
            user = User._default_manager.get(**{key: username})
        except User.DoesNotExist:
            raise forms.ValidationError(self.error_messages['not_found'],
                                        code='not_found')
        return user

    def get_user_by_email(self, email):
        validate_email(email)
        key = 'email__%sexact' % ('' if self.case_sensitive else 'i')
        User = get_user_model()
        try:
            user = User._default_manager.get(**{key: email})
        except User.DoesNotExist:
            raise forms.ValidationError(self.error_messages['not_found'],
                                        code='not_found')
        return user

    def get_user_by_both(self, username):
        key = '__%sexact'
        key = key % '' if self.case_sensitive else key % 'i'

        def f(field):
            return Q(**{field + key: username})

        filters = f('username') | f('email')
        User = get_user_model()
        try:
            user = User._default_manager.get(filters)
        except User.DoesNotExist:
            raise forms.ValidationError(self.error_messages['not_found'],
                                        code='not_found')
        except User.MultipleObjectsReturned:
            raise forms.ValidationError(("Unable to find user."))

        return user


class PasswordResetForm(forms.Form):
    password1 = forms.CharField(min_length=8,
                                label=('New password'),
                                widget=forms.PasswordInput,
                                )
    password2 = forms.CharField(min_length=8,
                                label=('New password (confirm)'),
                                widget=forms.PasswordInput,
                                )
    MIN_LENGTH = 8

    error_messages = {
        'password_mismatch':("The two passwords didn't match."),
        'password_size':("Password must contain at least 8 characters."),
    }

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user')
        super(PasswordResetForm, self).__init__(*args, **kwargs)

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1', '')
        password2 = self.cleaned_data['password2']
        size1 = self.data['password1']
        size2 = self.data['password2']
        if not password1 == password2:
            raise forms.ValidationError(
                self.error_messages['password_mismatch'],
                code='password_mismatch')

        if (len(size1) or len(size2)) < self.MIN_LENGTH:
            raise forms.ValidationError(
                self.error_messages['password_size'],
                code='password_size')

        return password2

    def save(self, commit=True):
        self.user.set_password(self.cleaned_data['password1'])
        if commit:
            get_user_model()._default_manager.filter(pk=self.user.pk).update(
                password=self.user.password,
            )
        return self.user

