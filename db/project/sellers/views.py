from django.shortcuts import render
from django.http import Http404
from rest_framework import generics, status
from rest_framework.response import Response

from sellers.serializers import SellerCreateSerializer
from sellers.serializers import SellerSerializer

from sellers.models import Seller

# Create your views here.
class SellerList(generics.ListCreateAPIView):
    serializer_class = SellerSerializer

    def get_queryset(self):
        return Seller.objects.all()

    def post(self, request):
        serializer = SellerCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)