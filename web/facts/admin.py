from django.contrib import admin
from web.facts.models import (
    Fact,
    Category,
)


class CategoryInline(admin.TabularInline):
    model = Category


class CategoryAdmin(admin.ModelAdmin):
    pass


admin.site.register(Category, CategoryAdmin)


class FactToolAdmin(admin.ModelAdmin):
    fields = ("fact_text", "true_fact", "created")
    list_display = ("fact_text", "true_fact", "created")


admin.site.register(Fact, FactToolAdmin)
