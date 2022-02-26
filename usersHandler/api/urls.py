from unicodedata import name
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path

from usersHandler.api.views import log_out, registration_view
urlpatterns = [
    path('login/',obtain_auth_token,name='login'),
    path('logout/',log_out,name='logout'),
    path('register/',registration_view,name='register'),
]
