from rest_framework import serializers

from sellers.models import Seller


class SellerCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Seller
        fields = ('id', 'name', 'address', 'phone')

class SellerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Seller
        fields = ('id', 'name', 'address', 'phone')
