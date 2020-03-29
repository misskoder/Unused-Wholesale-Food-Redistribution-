import django_filters
from django.shortcuts import render, get_object_or_404
from django.http import Http404, HttpResponseServerError
from rest_framework import generics, status
from rest_framework.response import Response

from products.serializers import ProductCreateSerializer
from products.serializers import ProductSerializer

from products.models import Product

# Create your views here.
class ProductList(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]

    def get(self, request):
        products = Product.objects.all()
        data = ProductSerializer(products, many=True).data 
        return Response(data)

    def post(self, request):
        serializer = ProductCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
