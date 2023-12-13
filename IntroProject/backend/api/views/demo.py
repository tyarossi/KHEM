from django.urls import reverse
from rest_framework import generics, status
from django.template import loader
from rest_framework.response import Response
from api.models.demo import User
from api.serializers.demo import DemoSerializer

class DemoView(generics.GenericAPIView):
    serializer_class = DemoSerializer

    def get(self, request):
        hold = User.objects.all() 
        serializer = self.serializer_class(hold, many=True)
        return Response({'message': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
        
class DemoPost(generics.GenericAPIView):
    serializer_class = DemoSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'success', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DemoUpdate(generics.GenericAPIView):
#gets User from table with id == id then updates them
    def post(self, request):
        User.objects.filter(id = request.data['id']).update(
            name = request.data['name'],
            email = request.data['email']
            )
        return Response({'message': 'success', 'data': User.data}, status=status.HTTP_200_OK)
    
class DemoDelete(generics.GenericAPIView):
    def delete(self, request):
        curUser = User.objects.get(id = request.data['id'])
        curUser.delete()
        return Response({'message': 'success', 'data': User.data}, status=status.HTTP_200_OK)