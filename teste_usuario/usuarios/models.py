from django.db import models
from django.conf import settings


class Perfil(models.Model):
    descricao = models.CharField(max_length=30, blank=False)

    def get_perm(self):
        return [p.codigo for p in Permissao.objects.filter(perfil=self)]


class Permissao(models.Model):
    codigo_choices = [
        ('menu_configuracoes', 'Acesso ao Menu Configurações'),
        ('menu_tabelas', 'Acesso ao Menu Administrativo'),
        ('menu_fichas', 'Acesso ao Menu Fichas'),
        ('menu_ceuas', 'Acesso ao Menu CEUAs'),
        ('menu_pedidos', 'Acesso ao Menu Pedidos'),
        ('menu_pesquisadores_rts', 'Acesso ao Menu Pesquisadores & RTs'),
        ('visualizar_tarefas', 'Acesso para Visualizar Tarefas'),
        ('atribuir_tarefas', 'Permissão para Atribuir Tarefas'),
        ('menu_auditoria', 'Acesso ao Menu Auditoria'),
        ('editar_modelos', 'Permissão para Editar Modelos Solicitados pelo RT'),
        ('atender_pedidos', 'Permissão para Atender Pedidos'),
        ('cancelar_pedidos', 'Permissão para Cancelar Pedidos'),
        ('calendario_fornecimento', 'Calendario de Fornecimento com todas as datas'),
    ]

    perfil = models.ForeignKey(Perfil, on_delete=models.CASCADE)
    codigo = models.CharField(max_length=45, blank=False, choices=codigo_choices)
