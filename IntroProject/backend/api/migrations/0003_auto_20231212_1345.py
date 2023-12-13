# Generated by Django 3.2.13 on 2023-12-12 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_person'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tests',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age', models.IntegerField(default=18)),
                ('height', models.FloatField(default=None)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.IntegerField(default=0, primary_key='true', serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('eqTestScore', models.IntegerField(default=0)),
                ('kinTestScore', models.IntegerField(default=0)),
                ('eleTestScore', models.IntegerField(default=0)),
                ('balTestScore', models.IntegerField(default=0)),
            ],
        ),
        migrations.DeleteModel(
            name='Demo',
        ),
        migrations.DeleteModel(
            name='Person',
        ),
    ]