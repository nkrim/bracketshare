from django.contrib import admin

from .models import TemplateBracket, TemplateQuad, TemplateEntry, AlbumGroup

@admin.register(TemplateBracket)
class TemplateBracketAdmin(admin.ModelAdmin):
	list_display = ('name', 'size', 'uuid')


@admin.register(TemplateQuad)
class TemplateQuadAdmin(admin.ModelAdmin):
	list_display = ('name', 'bracket', 'quad_index_str')

	def quad_index_str(self, obj):
		str_list = ['-', 'Top Left', 'Bottom Left', 'Top Right', 'Bottom Right']
		return str_list[obj.quad_index+1]


@admin.register(TemplateEntry)
class TemplateEntryAdmin(admin.ModelAdmin):
	list_display = ('name', 'bracket', 'quad', 'order', 'album_group_name')

	def bracket(self, obj):
		return obj.quad.bracket

@admin.register(AlbumGroup)
class AlbumGroupAdmin(admin.ModelAdmin):
	list_display = ('name', 'bracket', 'bg_color', 'font_color')