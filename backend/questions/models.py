from django.db import models

class Question(models.Model):
    difficulty = models.CharField(max_length=20, choices=[('Beginner', 'Beginner'), ('Intermediate', 'Intermediate'), ('Expert', 'Expert')])
    category = models.CharField(max_length=50)
    text = models.TextField()
    answer_choices = models.TextField(blank=True)  # Comma-separated choices for multiple choice questions
    correct_answer = models.TextField(blank=True)  # Stores the correct answer for multiple choice or open-ended questions
