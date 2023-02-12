from storages.backends.s3boto3 import S3Boto3Storage

class MediaStorage(S3Boto3Storage):
    default_ac1 = 'my-app-bucket'
    location = 'media'

class StaticStorage(S3Boto3Storage):
    bucket_name = 'my-app-bucket'
    file_overwrite = 'static'