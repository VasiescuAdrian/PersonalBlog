from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    date = models.DateField()
    image = models.ImageField(upload_to='uploads/')
    image_alt = models.CharField(max_length=200, blank=True)
    content_paragraph1 = models.TextField()
    content_paragraph2 = models.TextField(blank=True)
    content_paragraph3 = models.TextField(blank=True)


    more_details_for_the_dedicated_page = models.TextField(max_length=1000, default='', blank=True)

    def __str__(self):
        return self.title


class Review(models.Model):
    email = models.EmailField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    comment = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def update_review(self, email, rating, comment):
        self.email = email
        self.rating = rating
        self.comment = comment
        self.save()

    def delete_review(self):
        self.delete()
