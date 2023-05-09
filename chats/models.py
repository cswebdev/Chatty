from django.db import models

# models for chat app

class Chat(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    users = models.ManyToManyField('auth.User', related_name='chats')


    def __str__(self):
        return self.name


class ChatRoom(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    users = models.ManyToManyField('auth.User', related_name='chatrooms')


    def __str__(self):
        return self.name


