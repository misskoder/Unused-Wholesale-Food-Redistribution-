from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from products import views


app_name = 'products'
urlpatterns = [
    path('products/', views.ProductList.as_view(), name='product list'),
    path('products/<int:pk>', views.ProductDetail.as_view(), name='product_detail')
]

urlpatterns = format_suffix_patterns(urlpatterns)
