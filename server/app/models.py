from django.db import models

class TodoList(models.Model):
    name = models.CharField(max_length=255)

class Todo(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    todo_list = models.ForeignKey(TodoList, on_delete=models.CASCADE)


