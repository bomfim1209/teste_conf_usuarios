from django.urls import path
from usuarios import views

urlpatterns = [
    #Meu Perfil
    path('perfil/<int:pk>/', views.perfil, name='perfil'), #Formulario com os campos de perfil do usuario
    path('atualizar-perfil/<int:pk>/', views.atualizar_perfil, name='atualizar_perfil'), #Atualizar os campos do usuario

    #Usuarios
    path('listar-usuarios/', views.listar_usuarios, name='listar_usuarios'),
    path('editar-usuario/<int:pk>/', views.editar_usuario, name='editar_usuario'),

    #Perfis
    path('listar-perfis/', views.listar_perfis, name='listar_perfis'),
    path('criar-perfil/', views.criar_perfil, name='criar_perfil'),
    path('editar-perfil/<int:pk>/', views.editar_perfil, name='editar_perfil'),
    path('excluir-perfil/<int:pk>/', views.excluir_perfil, name='excluir_perfil'),

    #Permissoes
    #path('listar-permissoes/', views.listar_permissoes, name='listar_permissoes'),
    #path('criar-permissao/', views.criar_permissao, name='criar_permissao'),
    #path('editar-permissao/<int:pk>/', views.editar_permissao, name='editar_permissao'),
]