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
    queryset = ''

    def post(self, request, format=None):
        return Response("ok")