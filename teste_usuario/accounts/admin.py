from django.contrib import admin, messages
from django.contrib.auth.admin import UserAdmin
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters

from accounts.forms import MyUserChangeForm, MyUserCreationForm
from accounts.models import User
# from salas.models import Estante

csrf_protect_m = method_decorator(csrf_protect)
sensitive_post_parameters_m = method_decorator(sensitive_post_parameters())


class MyUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Dados gerais', {'fields': ('first_name', 'last_name', 'perfil')}),
        ('Perfil',
         {'fields': ('is_active', 'is_staff', 'is_superuser', 'is_email_verified', 'groups', 'user_permissions')}),
        ('Logs', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')}
         ),
    )
    form = MyUserChangeForm
    add_form = MyUserCreationForm
    list_display = ('email', 'first_name', 'last_name', 'perfil', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('first_name', 'last_name', 'email')
    ordering = ('email',)


admin.site.register(User, MyUserAdmin)
# admin.site.register(Estante)
