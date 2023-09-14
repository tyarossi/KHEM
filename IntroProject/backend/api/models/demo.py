from django.db import models

class Demo(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(default=18)
    height = models.FloatField(default=None)
    
class Person(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(default=18)
    height = models.FloatField(default=None)
    eyeColor = models.CharField(max_length=100)