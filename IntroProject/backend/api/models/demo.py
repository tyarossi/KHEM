from django.db import models
    
class User(models.Model):
    id = models.IntegerField(default=0, primary_key='True')
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    eqTestScore = models.IntegerField(default=0)
    kinTestScore = models.IntegerField(default=0)
    eleTestScore = models.IntegerField(default=0)
    balTestScore = models.IntegerField(default=0)
    # age = models.IntegerField(default=18)
    # height = models.FloatField(default=None)
    # eyeColor = models.CharField(max_length=100)