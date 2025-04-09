from django.forms import ModelForm

from accounts.models import User
from usuarios.models import Permissao, Perfil


class UserForm(ModelForm):
    class Meta:
        model = User
        fields = '__all__'


class PerfilForm(ModelForm):
    class Meta:
        model = Perfil
        fields = '__all__'


class PermissaoForm(ModelForm):
    class Meta:
        model = Permissao
        fields = '__all__'