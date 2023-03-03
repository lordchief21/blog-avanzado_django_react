
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Category
from apps.category.serializer import CategorySerializer
from  rest_framework.pagination import PageNumberPagination

class CategoryList(APIView):
    def get(self, request, format = None):
        if Category.objects.all().exists():
            categories = Category.objects.all()
            
            result = []
            
            for cat in categories:
                
                if not cat.parent:
                    item_cat = {}
                    item_cat['id'] = cat.id #type:ignore
                    item_cat['name'] = cat.name
                    item_cat['thumbail'] = cat.thumbnail.url
                    item_cat['sub_categories'] = []
                    
                    for category in categories:
                        sub_item = {}
                        if category.parent and category.parent.id == cat.id: #type:ignore
                            sub_item['id'] = category.id #type:ignore
                            sub_item['name'] = category.name
                            sub_item['thumbnail'] = category.thumbnail.url
                            item_cat['sub_categories'].append(sub_item)
                    
                    result.append(item_cat)
                    
            return Response({'categories': result}, status= status.HTTP_200_OK)
        else:
            return Response({'error':'no categories found'}, status= status.HTTP_500_INTERNAL_SERVER_ERROR)