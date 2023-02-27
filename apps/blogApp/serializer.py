from rest_framework import serializers
from apps.category.serializer import CategorySerializer
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    thumbail=serializers.CharField(source = 'get_Thumbail')
    video = serializers.CharField(source = 'get_video')
    category = CategorySerializer()
    class Meta:
        model = Post
        fields= [
            'blog_uuid',
            'title', 
            'slug',  
            'thumbail',
            'video', 
            'description', 
            'excerpt', 
            'published',
            'status',
            'category'

        ]