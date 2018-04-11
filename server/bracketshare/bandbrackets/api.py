from rest_framework import viewsets

from .models import TemplateBracket
from .serializers import TemplateBracketSerializer

# TemplateBracket ViewSet
# ==================================================
class TemplateBracketViewSet(viewsets.ModelViewSet):
    # Properties
    # --------------------------------------------------
    queryset = TemplateBracket.objects.all()
    serializer_class = TemplateBracketSerializer
    lookup_field = 'uuid'