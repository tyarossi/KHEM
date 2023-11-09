from rest_framework import serializers
from api.models.demo import Person

class DemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'name', 'age', 'height', 'eyeColor']
