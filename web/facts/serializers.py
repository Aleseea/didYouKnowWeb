from django.contrib.auth.models import User, Group
from rest_framework import serializers
from web.facts.models import Fact, Category


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['category_name', 'facts']


class FactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fact
        fields = ['fact_text', 'true_fact']
