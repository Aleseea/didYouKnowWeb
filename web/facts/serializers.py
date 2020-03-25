from django.contrib.auth.models import User, Group
from rest_framework import serializers
from web.facts.models import (
    Fact,
    Category,
    EmailList,
)


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class FactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fact
        exclude = []
        fields = ['id', 'fact_text', 'true_fact']


class CategorySerializer(serializers.ModelSerializer):
    facts = FactSerializer(required=False, many=True, read_only=False)

    class Meta:
        model = Category
        exclude = []
        # fields = ['id', 'category_name', 'facts']


class EmailListSerializer(serializers.ModelSerializer):

    class Meta:
        model = EmailList
        excluded = []
        fields = ['first_name', 'last_name', 'email']
