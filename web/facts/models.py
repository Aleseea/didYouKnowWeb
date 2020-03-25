import datetime
from django.db import models
from django.utils import timezone


class Fact(models.Model):
    fact_text = models.TextField(blank=False, null=False)
    true_fact = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fact_text

    def was_published_recently(self):
        return self.created >= timezone.now() - datetime.timedelta(days=1)


class Category(models.Model):
    category_name = models.CharField(max_length=200, null=False, blank=False)
    facts = models.ManyToManyField(Fact)

    def __str__(self):
        return self.category_name


class EmailList(models.Model):
    first_name = models.CharField(max_length=40, null=False, blank=False)
    last_name = models.CharField(max_length=100, null=False, blank=False)
    email = models.CharField(max_length=150, null=False, blank=False)

    def __str__(self):
        return self.email
