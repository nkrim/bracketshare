from rest_framework.routers import DefaultRouter

from .api import TemplateBracketViewSet

router = DefaultRouter()
router.register(r't-brackets', TemplateBracketViewSet, base_name='template-bracket')
urlpatterns = router.urls