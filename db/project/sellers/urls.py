from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from sellers import views


app_name = 'sellers'
urlpatterns = [
    path('sellers', views.SellerList.as_view(), name='seller list'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
