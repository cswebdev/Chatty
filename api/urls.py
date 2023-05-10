from django.urls import path, include


api_name = 'api_v1'

urlpatterns = [
    path('', include('chats.urls')),
    path('', include('accounts.urls')),
]