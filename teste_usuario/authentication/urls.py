# -*- encoding: utf-8 -*-
from django.urls import path
from .views import login_view, register_user
from django.contrib.auth.views import LogoutView
from authentication import views

urlpatterns = [
    path('login/', login_view, name="login"),
    path('register/', register_user, name="register"),
    path('logout/', LogoutView.as_view(), name="logout"),

    # path('recover/(?P<signature>.+)/', views.recover_done,name='password_reset_sent'),
    path('recover/', views.recover, name='password_reset_recover'),
    path('reset/done/', views.reset_done, name='password_reset_done'),
    # path('reset/(?P<token>[\w:-]+)/', views.reset, name='password_reset_reset'),

    path('recover/<str:signature>/', views.recover_done, name='password_reset_sent'),
    path('reset/<str:token>/', views.reset, name='password_reset_reset'),
]
