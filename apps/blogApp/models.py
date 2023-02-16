from django.db import models
from uuid import uuid4

# Create your models here.

def blog_directory_path(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):
    def queryset(Self):
        return super().get_queryset().filter(status = 'published')
    
    options = {
        ('draft','Draft'),
        ('published', 'Published'),
    }
    
    blog_uuid =     models.UUIDField(default = uuid4, unique=True)
    title =         models.CharField(max_length=255)
    slug =          models.SlugField(unique=True)
    thumbail =      models.ImageField(upload_to=blog_directory_path)
    video =         models.FileField(upload_to=blog_directory_path, blank=True, null =True)
    description =   models.TextField()
    excerpt =       models.CharField(max_length=100)
    
    # Código a partir del 11-FEB#
    
        #category = models.ForeignKey(BlogCategory, on_delete) 
     
    
    