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

    # List (unchanged)
    # --------------------------------------------------
    # def list(self, request):
    #     pass

    # Create (unchanged)
    # --------------------------------------------------
    # def create(self, request):
    #     pass

    # Retrieve
    # --------------------------------------------------
    def retrieve(self, request, pk=None):
        obj = get_obj_from_uuid(pk)
        super().retrieve(request, obj.pk)

    # Retrieve
    # --------------------------------------------------
    def update(self, request, pk=None):
        obj = get_obj_from_uuid(pk)
        super().update(request, obj.pk)

    # Retrieve
    # --------------------------------------------------
    def partial_update(self, request, pk=None):
        obj = get_obj_from_uuid(pk)
        super().partial_update(request, obj.pk)

    # Retrieve
    # --------------------------------------------------
    def destroy(self, request, pk=None):
        obj = get_obj_from_uuid(pk)
        super().destroy(request, obj.pk)

    # Helper Functions
    # --------------------------------------------------
    def get_obj_from_uuid(uuid):
        return self.queryset.get(uuid=uuid)