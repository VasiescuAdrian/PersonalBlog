from django.urls import path
from . import views



urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('galeriefoto/', views.galeriefoto, name='galeriefoto'),
    path('stil-de-viata/', views.stil_de_viata, name='stil_de_viata'),
    path('hobby-uri/', views.hobby_uri, name='hobby_uri'),
    path('contact/', views.contact, name='contact'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('submit-review/', views.submit_review, name='submit_review'),
    path('update-review/<int:review_id>/', views.update_review, name='update_review'),
    path('delete-review/<int:review_id>/', views.delete_review, name='delete_review'),

    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
]

