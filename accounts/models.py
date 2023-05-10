from django.db import models
from django.conf import settings


# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete= models.CASCADE, blank=True)
    #avatar = models.ImageField(upload_to='profiles/')
    display_name = models.CharField(max_length=255)

    def __str__(self):
        return self.user
    