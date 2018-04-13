from django.db import models
from django.core.exceptions import ObjectDoesNotExist

import uuid
from datetime import datetime

# TemplateQuad Model
# ==================================================
class TemplateQuad(models.Model):
	# Properties
	# --------------------------------------------------
	name 	= models.CharField(
				max_length	= 100)

	# Related Fields
	# --------------------------------------------------
	# get_bracket() -> TemplateBracket
	# entries -> TemplateEntry[]

	# Functional Properties
	# --------------------------------------------------
	@property
	def bracket(self):
		try:
			return self.bracket_as_top_left
		except ObjectDoesNotExist:
			pass
		try:
			return self.bracket_as_bot_left
		except ObjectDoesNotExist:
			pass
		try:
			return self.bracket_as_top_right
		except ObjectDoesNotExist:
			pass
		try:
			return self.bracket_as_bot_right
		except ObjectDoesNotExist:
			pass
		return None

	@property
	def quad_index(self):
		try:
			self.bracket_as_top_left
			return 0
		except ObjectDoesNotExist:
			pass
		try:
			self.bracket_as_bot_left
			return 1
		except ObjectDoesNotExist:
			pass
		try:
			self.bracket_as_top_right
			return 2
		except ObjectDoesNotExist:
			pass
		try:
			self.bracket_as_bot_right
			return 3
		except ObjectDoesNotExist:
			pass
		return -1

	# Meta
	# --------------------------------------------------
	class Meta:
		verbose_name 			= '02 Template Quad'
		verbose_name_plural		= '02 Template Quads'

	# Model Functions
	# --------------------------------------------------
	def __str__(self):
		return self.name


# TemplateEntry Model
# ==================================================
class TemplateEntry(models.Model):
	# Properties
	# --------------------------------------------------
	name 				= models.CharField(
							max_length 	= 100)
	album_group_name 	= models.CharField(
							max_length 	= 100)

	# Upward Relations
	# --------------------------------------------------
	quad 	= models.ForeignKey(
				TemplateQuad,
				on_delete			= models.CASCADE,
				related_name 		= 'entries',
				related_query_name 	= 'entry')

	# Meta
	# --------------------------------------------------
	class Meta:
		verbose_name 			= '03 Template Entry'
		verbose_name_plural		= '03 Template Entries'
		order_with_respect_to 	= 'quad'

	# Model Functions
	# --------------------------------------------------
	def __str__(self):
		return self.name


# TemplateBracket Model
# ==================================================
class TemplateBracket(models.Model):
	# Properties
	# --------------------------------------------------
	uuid 		= models.UUIDField(
					default		= uuid.uuid4, 
					unique		= True)
	name 		= models.CharField(
					max_length	= 100)
	size		= models.SmallIntegerField(
					default		= 32,
					choices		= [
						(	64, '64'	),
						(	32, '32'	),
						(	16, '16'	),
						(	8,	'8'		),
						(	4,	'4'		)])
	created_on 	= models.DateTimeField(
					auto_now_add= True)

	# Upward Relations
	# --------------------------------------------------
	# user	= models.ForeignKey(
	# 			CognitoUser,
	# 			on_delete	= models.SET_NULL,
	#			default		= None,
	# 			null 		= True)
	# band 	= models.ForeignKey(
	# 			Band,
	# 			on_delete	= models.CASCADE)

	# Downward Relations
	# --------------------------------------------------
	top_left_quad	= models.OneToOneField(
						TemplateQuad,
						on_delete			= models.CASCADE,
						related_name 		= 'bracket_as_top_left')
	bot_left_quad	= models.OneToOneField(
						TemplateQuad,
						on_delete			= models.CASCADE,
						related_name 		= 'bracket_as_bot_left')
	top_right_quad	= models.OneToOneField(
						TemplateQuad,
						on_delete			= models.CASCADE,
						related_name 		= 'bracket_as_top_right')
	bot_right_quad	= models.OneToOneField(
						TemplateQuad,
						on_delete			= models.CASCADE,
						related_name 		= 'bracket_as_bot_right')
	
	# Meta
	# --------------------------------------------------
	class Meta:
		verbose_name 			= '01 Template Bracket'
		verbose_name_plural		= '01 Template Brackets'

	# Model Functions
	# --------------------------------------------------
	def __str__(self):
		return self.name


# AlbumGroup Model
# ==================================================
class AlbumGroup(models.Model):
	# Properties
	# --------------------------------------------------
	name 		= models.CharField(
					max_length	= 100)
	bg_color	= models.IntegerField()
	font_color	= models.IntegerField()

	# Upward Relations
	# --------------------------------------------------
	bracket		= models.ForeignKey(
					TemplateBracket,
					on_delete			= models.CASCADE,
					related_name 		= 'album_groups',
					related_query_name 	= 'album_group')

	# Meta
	# --------------------------------------------------
	class Meta:
		verbose_name 			= '04 Album Group'
		verbose_name_plural		= '04 Album Groups'

	# Model Functions
	# --------------------------------------------------
	def __str__(self):
		return self.name
