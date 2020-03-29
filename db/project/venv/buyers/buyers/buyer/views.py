from django.shortcuts import render
from django.http import Http404
from rest_framework import generics, status
from rest_framework.response import Response

from buyers.serializers import BuyerCreateSerializer
from buyers.serializers import BuyerSerializer

from buyer.models import Buyers

# Create your views here.
class BuyerList(generics.ListCreateAPIView):
    serializer_class = BuyerSerializer
    queryset = ''

    def post(self, request):
        serializer = BuyerCreateSerializer(data=request.data)
        if serializer.is_valid()
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)