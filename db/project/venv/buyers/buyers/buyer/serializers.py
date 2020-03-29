from rest_framework import serializers

from buyer.models import Buyer


class BuyerCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Buyer
        fields = ('name', 'address', 'phone')

class BuyerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Buyer
        fields = ('name', 'address', 'phone')
