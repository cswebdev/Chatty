from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework import permissions
from .models import Profile
from .serializers import ProfileSerializer
from .permissions import IsOwnerOrReadOnly
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView
from dj_rest_auth.registration.serializers import RegisterSerializer



# Create your views here.

User = get_user_model()
class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

class CustomRegisterView(RegisterView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

class CustomLoginView(LoginView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

# class CustomRegisterView(RegisterView):
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer
#     permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

