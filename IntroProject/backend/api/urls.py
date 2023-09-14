from django.urls import path
from api.views.demo import DemoView, DemoPost, DemoDelete, DemoUpdate

urlpatterns = [
    path('getDemo/', DemoView.as_view()),
    path('post/', DemoPost.as_view()),
    path('update/', DemoUpdate.as_view()),
    path('delete/', DemoDelete.as_view())
]