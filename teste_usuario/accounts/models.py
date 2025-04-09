from __future__ import unicode_literals
from django.contrib.auth.models import Permission, Group, PermissionsMixin, AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils import timezone
#from django.utils.translation import ugettext_lazy as _

from usuarios.models import Permissao, Perfil


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        now = timezone.now()
        if not email:
            raise ValueError('The given email address must be set')
        email = UserManager.normalize_email(email)
        user = self.model(email=email,
                          is_staff=False, is_active=False, is_superuser=False,
                          last_login=now, date_joined=now, **extra_fields)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        u = self.create_user(email, password, **extra_fields)
        u.is_staff = True
        u.is_active = True
        u.is_superuser = True
        u.save(using=self._db)
        return u


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(('username'), max_length=30, blank=True)
    email = models.EmailField('email', unique=True)
    first_name = models.CharField(('first name'), max_length=30, blank=False)
    last_name = models.CharField(('last name'), max_length=30, blank=True)

    is_staff = models.BooleanField('staff', default=False)
    is_active = models.BooleanField('active', default=True)
    is_email_verified = models.BooleanField('E-mail verified', default=False)
    last_login =  models.DateTimeField('Date joined', default=timezone.now)
    date_joined = models.DateTimeField('Date joined', default=timezone.now)

    perfil = models.CharField('perfil', max_length=255, blank=False, default=0)

    crmv = models.CharField('CRMV', max_length=255, blank=True)
    instituicao = models.CharField('Instituicao', max_length=255, blank=True)
    local = models.CharField('Local', max_length=255, blank=True)
    laboratorio = models.CharField('Laboratorio', max_length=255, blank=True)
    telefone = models.CharField('Telefone', max_length=255, blank=True)
    endereco = models.CharField('Endereco', max_length=255, blank=True)
    cidade = models.CharField('Cidade', max_length=255, blank=True)
    pais = models.CharField('Pais', max_length=255, blank=True)
    cep = models.CharField('CEP', max_length=255, blank=True)
    obs = models.TextField(verbose_name="Obs", blank=True)
    is_online = models.CharField('Online', max_length=1, blank=True, default=0)

    USERNAME_FIELD = 'email'

    objects = UserManager()

    def get_full_name(self):
        return u' '.join((self.first_name, self.last_name))

    def get_short_name(self):
        return self.first_name

    def get_user_perm(self):
        return [p.codigo for p in Permissao.objects.filter(perfil=self.perfil)]

    class Meta:
        verbose_name = 'usuario'
        verbose_name_plural = 'usuarios'
