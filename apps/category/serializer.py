from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    thumbail=serializers.CharField(source = 'get_thumbnail')
    
    class Meta:
        model = Category
        fields= [
            'id',
            'name',
            'thumbail'
            

        ]