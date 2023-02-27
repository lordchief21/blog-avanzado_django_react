# Generated by Django 4.0.6 on 2023-02-27 04:06

import apps.blogApp.models
import datetime
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_uuid', models.UUIDField(default=uuid.uuid4, unique=True)),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(unique=True)),
                ('thumbail', models.ImageField(upload_to=apps.blogApp.models.blog_directory_path)),
                ('video', models.FileField(blank=True, null=True, upload_to=apps.blogApp.models.blog_directory_path)),
                ('description', models.TextField()),
                ('excerpt', models.CharField(max_length=100)),
                ('published', models.DateTimeField(default=datetime.timezone)),
                ('status', models.CharField(choices=[('published', 'Published'), ('draft', 'Draft')], default='draft', max_length=10)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='category.category')),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
    ]
