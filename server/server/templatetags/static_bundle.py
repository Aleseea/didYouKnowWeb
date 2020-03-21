
from django.conf import settings
from django import template

register = template.Library()

@register.simple_tag
def bundle(asset):
    return settings.BUNDLE_URL + asset
