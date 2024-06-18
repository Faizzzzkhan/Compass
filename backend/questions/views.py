from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Question
from .serializers import QuestionSerializer

class GetQuestionsView(APIView):
    def get(self, request, mode, category):
        questions = Question.objects.filter(difficulty=mode, category=category)
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)