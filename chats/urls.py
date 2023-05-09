from django.urls import path
from . import views


# urls for chats app
urlpatterns = [
    path('admin/', admin.site.urls),
]