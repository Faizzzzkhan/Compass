# Generated by Django 5.0.6 on 2024-06-18 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "difficulty",
                    models.CharField(
                        choices=[
                            ("Beginner", "Beginner"),
                            ("Intermediate", "Intermediate"),
                            ("Expert", "Expert"),
                        ],
                        max_length=20,
                    ),
                ),
                ("category", models.CharField(max_length=50)),
                ("text", models.TextField()),
                ("answer_choices", models.TextField(blank=True)),
                ("correct_answer", models.TextField(blank=True)),
            ],
        ),
    ]