from django.contrib import admin

from bracketshare.utils import int_to_rgb

from .models import TemplateBracket, TemplateQuad, TemplateEntry, AlbumGroup

@admin.register(TemplateBracket)
class TemplateBracketAdmin(admin.ModelAdmin):
	list_display = ('name', 'size', 'uuid', 'created_on')
	readonly_fields = ('uuid', 'created_on')


@admin.register(TemplateQuad)
class TemplateQuadAdmin(admin.ModelAdmin):
	list_display = ('name', 'bracket', 'quad_index_str')
	fields = ('name', 'bracket', 'quad_index_str')
	readonly_fields = ('bracket', 'quad_index_str')

	def quad_index_str(self, obj):
		str_list = ['-', 'Top Left', 'Bottom Left', 'Top Right', 'Bottom Right']
		return str_list[obj.quad_index+1]


@admin.register(TemplateEntry)
class TemplateEntryAdmin(admin.ModelAdmin):
	list_display = ('name', 'bracket', 'quad', '_order', 'album_group_name')
	fields = ('name', 'album_group_name', ('quad', 'bracket'), '_order')
	readonly_fields = ('_order', 'bracket')

	def bracket(self, obj):
		return obj.quad.bracket

@admin.register(AlbumGroup)
class AlbumGroupAdmin(admin.ModelAdmin):
	list_display = ('name', 'bracket', 'bg_color', 'font_color')
	fields = ('name', ('bg_color', 'bg_color_str'), ('font_color', 'font_color_str'), 'bracket')
	readonly_fields = ('bg_color_str', 'font_color_str')

	def bg_color_str(self, obj):
		return int_to_rgb(obj.bg_color)

	def font_color_str(self, obj):
		return int_to_rgb(obj.font_color)