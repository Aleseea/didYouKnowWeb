from django.http import HttpResponse, JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from web.facts import models as app_model
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from web.facts import serializers as app_serializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated


class UserViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = app_serializer.UserSerializer


class GroupViewSet(ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = app_serializer.GroupSerializer


class FactViewSet(ModelViewSet):
    """
    API endpoint that allows categories to be viewed or edited.
    """
    queryset = app_model.Fact.objects.all().order_by('created')
    serializer_class = app_serializer.FactSerializer
    permission_classes = [IsAdminUser]


class CategoryViewSet(ModelViewSet):
    """
    API endpoint that allows categories to be viewed or edited.
    """
    queryset = app_model.Category.objects.all()
    serializer_class = app_serializer.CategorySerializer
    permission_classes = [IsAdminUser]

    @action(detail=True, methods=["post", "delete"], url_path="categories")
    def handle_fact(self, request, pk):
        self.check_permissions(request)
        fact_id = request.data.get("fact_id")
        fact = get_object_or_404(app_models.Fact, pk=fact_id)
        category = get_object_or_404(app_models.Category, pk=pk)

        if request.method.lower() == "post":
            # add the term
            category.facts.add(fact)
        elif request.method.lower() == "delete":
            category.facts.remove(fact)
        return Response()
