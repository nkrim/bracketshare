from rest_framework import serializers

from bracketshare.utils import RGBField

from bandbrackets.models import TemplateBracket, TemplateQuad, TemplateEntry, AlbumGroup

# AlbumGroup Serializers
# ==================================================
class AlbumGroupSerializer(serializers.ModelSerializer):
	# Fields
	# --------------------------------------------------
	bg_color = RGBField()
	font_color = RGBField()

	# Meta
	# --------------------------------------------------
	class Meta:
		model = AlbumGroup
		fields = ('name', 'bg_color', 'font_color')

# TemplateEntry Serializers
# ==================================================
class TemplateEntrySerializer(serializers.ModelSerializer):
	# Meta
	# --------------------------------------------------
	class Meta:
		model = TemplateEntry
		fields = ('name', 'album_group_name')

# TemplateQuad Serializers
# ==================================================
class TemplateQuadSerializer(serializers.ModelSerializer):
	# Fields
	# --------------------------------------------------
	entries = TemplateEntrySerializer(many=True)

	# Meta
	# --------------------------------------------------
	class Meta:
		model = TemplateQuad
		fields = ('name', 'entries')

# TemplateQuad Serializers
# ==================================================
class TemplateBracketSerializer(serializers.ModelSerializer):
	# Fields
	# --------------------------------------------------
	album_groups = AlbumGroupSerializer(many=True)
	top_left_quad = TemplateQuadSerializer()
	bot_left_quad = TemplateQuadSerializer()
	top_right_quad = TemplateQuadSerializer()
	bot_right_quad = TemplateQuadSerializer()

	# Meta
	# --------------------------------------------------
	class Meta:
		model = TemplateBracket
		fields = (	'uuid', 'created_on', 'name', 'size', 'album_groups',
					'top_left_quad', 'bot_left_quad',
					'top_right_quad', 'bot_right_quad',)
		read_only_fields = ('uuid', 'created_on')