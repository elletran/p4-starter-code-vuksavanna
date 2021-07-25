# chat/views.py
from django.shortcuts import render

def index(request):
    return render(request, 'draw/index.html')

def journal(request):
    return render(request, 'draw/journal.html')

def kiosk(request):
    return render(request, 'draw/kiosk.html')

def plant(request):
    return render(request, 'draw/plant.html')

def plantalt(request):
    return render(request, 'draw/plantalt.html')

def checkin(request):
    return render(request, 'draw/checkin.html')

def completejournal(request):
    return render(request, 'draw/completejournal.html')

def room(request, room_name):
    return render(request, 'draw/room.html', {
        'room_name': room_name
    })