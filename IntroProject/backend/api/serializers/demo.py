from rest_framework import serializers
from api.models.demo import User

class DemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'eqTestScore', 'kinTestScore', 'eleTestScore', 'balTestScore']
