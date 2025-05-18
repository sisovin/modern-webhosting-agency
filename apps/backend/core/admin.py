from django.contrib import admin
from .models import YourModel

class YourModelAdmin(admin.ModelAdmin):
    list_display = ('field1', 'field2', 'field3')
    search_fields = ('field1', 'field2')

admin.site.register(YourModel, YourModelAdmin)
