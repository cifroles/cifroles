from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.response import Response


class TreeCountSheet(generics.CreateAPIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        # Getting serializer of request
        # ser = self.get_serializer(data=request.data["data"], many=True)
        # ser.is_valid(raise_exception=True)
        # ser.save()

        return Response(request.data, status=200)
