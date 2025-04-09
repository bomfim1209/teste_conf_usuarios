from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.hashers import make_password

from accounts.forms import MyUserCreationForm
from accounts.models import User
from usuarios.forms import PermissaoForm, PerfilForm, UserForm
from usuarios.models import Permissao, Perfil


@login_required
def perfil(request, pk):
    perfil = User.objects.raw('''SELECT u.id, u.perfil, 
                               p.descricao 
                               FROM accounts_user u, usuarios_perfil p 
                               WHERE u.perfil = p.id
                               AND u.id = %s;''', [request.user.id])

    perfis = User.objects.raw('''SELECT p.id, p.descricao 
                               FROM usuarios_perfil p;''')
    return render(request, 'usuarios/perfil.html', locals())


@login_required
def atualizar_perfil(request, pk, template_name='usuarios/perfil.html'):
    usuario = get_object_or_404(User, pk=pk)
    form = UserForm(request.POST or None, instance=usuario)
    if request.method == 'POST':
        form.save()
        return redirect('perfil', pk)
    return render(request, template_name)


# Usuarios
@login_required
def listar_usuarios(request):
    usuarios = User.objects.raw('''SELECT u.id, u.perfil, u.is_active,
                                   p.descricao 
                                   FROM accounts_user u, usuarios_perfil p 
                                   WHERE u.perfil = p.id
                                   OR u.perfil = 0
                                   GROUP BY u.id;''')
    perfis = Perfil.objects.all()
    return render(request, 'usuarios/listar_usuarios.html', locals())

@login_required
def editar_usuario(request, pk, template_name='usuarios/listar_usuarios.html'):
    u = get_object_or_404(User, pk=pk)
    form = UserForm(request.POST or None, instance=u)
    if request.method=='POST':
        form.save()
        return redirect('listar_usuarios')
    return render(request, template_name, {'u':u})


# Perfis
@login_required
def listar_perfis(request):
    #perfis = Perfil.objects.all()
    #permissoes = Permissao.objects.all()
    #return render(request, 'usuarios/listar_perfis.html', {'perfis':perfis, 'permissoes':permissoes})
    context = {
       'perfis': Perfil.objects.all(),
       'permissao_list': Permissao.codigo_choices,
    }
    return render(request, 'usuarios/listar_perfis.html', context)


@login_required
def criar_perfil(request):
    form = PerfilForm(request.POST)
    permissoes = Permissao.objects.all()
    if request.method == 'POST':
        if form.is_valid():
            form.save()
        return redirect('listar_perfis')
    else:
        return render(request, 'page-404.html', locals())


@login_required
def editar_perfil(request, pk, template_name='usuarios/listar_perfis.html'):

    perfil = get_object_or_404(Perfil, pk=pk)
    if request.method == 'POST':
        form = PerfilForm(request.POST, instance=perfil)
        codigo_list = request.POST.getlist('codigo')

        if form.is_valid():

            perfil = form.save()
            Permissao.objects.filter(perfil=perfil).delete()
            bulk = []
            for codigo in codigo_list:
                bulk.append(Permissao(perfil=perfil, codigo=codigo))
            Permissao.objects.bulk_create(bulk)
            return redirect('listar_perfis')
        else:
            return redirect('listar_perfis')
    return render(request, template_name, {'bulk': bulk})


@login_required
def excluir_perfil(request, pk, template_name='usuarios/listar_perfis.html'):

    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # fetch the object related to passed id
    perfil = get_object_or_404(Perfil, pk=pk)
 
 
    if request.method =="POST":
        # delete object
        Permissao.objects.filter(perfil=perfil).delete()
        perfil.delete()
        # after deleting redirect to
        # home page
        return redirect('listar_perfis')
    else:
        return redirect('listar_perfis')
    return render(request, template_name, {'u':u})


# Permissoes
@login_required
def listar_permissoes(request):
    permissoes = Permissao.objects.all()
    return render(request, 'usuarios/listar_permissoes.html', {'permissoes':permissoes})


@login_required
def criar_permissao(request):
    form = PermissaoForm(request.POST)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
        return redirect('listar_permissoes')
    else:
        return render(request, 'page-404.html', locals())


@login_required
def editar_permissao(request, pk, template_name='usuarios/listar_permissoes.html'):
    u = get_object_or_404(Permissao, pk=pk)
    form = PermissaoForm(request.POST or None, instance=u)
    if request.method=='POST':
        form.save()
        return redirect('listar_permissoes')
    return render(request, template_name, {'u':u})