from django.urls import path
from .views import *

urlpatterns = [
    path('', BlogList.as_view()),
    path('<post_slug>', PostDetView.as_view())
]