# Generated by Django 3.0.2 on 2020-03-25 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('facts', '0002_auto_20200213_1839'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=40)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=150)),
            ],
        ),
    ]