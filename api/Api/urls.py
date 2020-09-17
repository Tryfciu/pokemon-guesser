from django.urls import path
from . import views

urlpatterns = [
    path('', views.RandomPokemons.as_view())
]