from rest_framework import viewsets
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    @action(detail=True, methods=['get','post'])
    def vacancies(self, request, pk=None):
        company = self.get_object()
        if request.method == 'GET':
            vacancies = company.vacancies.all()
            serializer = VacancySerializer(vacancies, many=True)
            return Response(serializer.data)
        elif request.method == 'POST':
            data = request.data.copy()
            data['company'] = company.id
            serializer = VacancySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @action(detail=False, methods=['get', 'post'])
    def top_ten(self, request):
        if request.method == 'GET':
            vacancies = Vacancy.objects.all().order_by('-salary')[:10]
            serializer = VacancySerializer(vacancies, many=True)
            return Response(serializer.data)
        elif request.method == 'POST':
            data = request.data.copy()
            serializer = VacancySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
