from django.contrib import admin
from .models import YourModel, User, HostingPlan, Domain, Testimonial, Contact

class YourModelAdmin(admin.ModelAdmin):
    list_display = ('field1', 'field2', 'field3')
    search_fields = ('field1', 'field2')

admin.site.register(YourModel, YourModelAdmin)
admin.site.register(User)
admin.site.register(HostingPlan)
admin.site.register(Domain)
admin.site.register(Testimonial)
admin.site.register(Contact)
