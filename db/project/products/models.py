from django.db import models

# Create your models here.
class Product(models.Model):
    seller = models.ForeignKey('sellers.Seller', on_delete=models.CASCADE)
    name = models.CharField(max_length=5000, null=False, blank=False)
    price = models.CharField(max_length=30, null=False, blank=False)

    def __str__(self):
        return self.name