from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post
from .serializer import PostSerializer
from .pagination import SmallSetPagination,MediumSetPagination,LargeSetPagination

# Create your views here.

class BlogList(APIView):

    def get(self, request, format = None):
        if Post.postobjects.all().exists():
            ##post_list = [post.publish for post in Post.objects.all()]
            
            post = Post.postobjects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(post,request)
            serializer = PostSerializer(results, many=True)
            
            return paginator.get_paginated_response({'post': serializer.data})
        else:
            return Response({'error':'Post not found'},status=status.HTTP_404_NOT_FOUND)

class PostDetView(APIView):
    def get(self,request,post_slug,format = None):
        post = get_object_or_404(Post,slug = post_slug )
        serializer = PostSerializer(post)
        return Response({'post': serializer.data}, status=status.HTTP_200_OK)
            
