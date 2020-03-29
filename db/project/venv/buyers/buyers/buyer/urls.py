from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from buyer import views


app_name = 'buyers'
urlpatterns = [
    path('buyers', views.BuyerList.as_view(), name='buyer list'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
