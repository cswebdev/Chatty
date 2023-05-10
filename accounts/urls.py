from django.urls import path, include
from . import views

app_name = 'accounts'

urlpatterns = [
    path('profile/', views.ProfileListAPIView.as_view(), name='profile'),
    path('profile/<int:pk>/', views.ProfileDetailAPIView.as_view(), name='profile_detail'),
     #path('profile/<int:pk>/update/', views.ProfileUpdateView.as_view(), name='profile_update'),
    #path('profile/<int:pk>/delete/', views.ProfileDeleteView.as_view(), name='profile_delete'),
]