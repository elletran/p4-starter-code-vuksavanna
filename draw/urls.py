# chat/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:room_name>/', views.room, name='room'),
    path('journal', views.journal, name = "journal"),
    path('kiosk', views.kiosk, name = "kiosk"),
    path('plant', views.plant, name = "plant"),
    path('checkin', views.checkin, name = "checkin"),
]