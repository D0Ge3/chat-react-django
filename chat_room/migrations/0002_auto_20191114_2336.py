# Generated by Django 2.2.7 on 2019-11-14 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat_room', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat',
            name='date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Дата отправки'),
        ),
    ]