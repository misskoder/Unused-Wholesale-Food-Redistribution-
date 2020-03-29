from django.shortcuts import render
from django.http import Http404
from rest_framework import generics, status
from rest_framework.response import Response

from products.serializers import ProductCreateSerializer
from products.serializers import ProductSerializer

from products.models import Product

# Create your views here.
class ProductList(generics.ListCreateAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
            return Product.objects.all()

    def post(self, request):
        serializer = ProductCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)