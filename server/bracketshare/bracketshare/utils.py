from rest_framework import serializers

# Color RGB Conversion
# ==================================================
# rgb_to_int()
# --------------------------------------------------
def rgb_to_int(rgb_string):
	# Exception Checks
	if not isinstance(rgb_string, str):
		raise TypeError('rgb_to_int() argument must be a string, not {}'.format(type(rgb_string).__name__))
	if not (len(rgb_string) == 6 or (len(rgb_string) == 7 and rgb_string[0] == '#')):
		raise ValueError('could not convert rgb_string to int: \'{}\''.format(rgb_string))
	# Implemenation
	return int(rgb_string if len(rgb_string) == 6 else rgb_string[1:], 16)

# int_to_rgb()
# --------------------------------------------------
def int_to_rgb(rgb_int, hashtag=True):
	# Exception Checks
	if rgb_int is None:
		return '#' if hashtag else ''
	if not isinstance(rgb_int, int):
		raise TypeError('int_to_rgb() argument must be an int, not {}'.format(type(rgb_int).__name__))
	# Implementation
	rgb_string =  '{:06x}'.format(rgb_int)
	if hashtag:
		rgb_string = '#'+rgb_string
	return rgb_string

# RGBField
# --------------------------------------------------
class RGBField(serializers.Field):
	def to_representation(self, obj):
		if not isinstance(obj, int):
			raise ValidationError('Invalid type. Expected an int, but got \'{}\''.format(type(obj).__name__))
		if obj < 0 or obj > 0xffffff:
			raise ValidationError('Integer color data out of bounds. Must not be less than 0 or greater than {:d}, but is {:d}'.format(0xffffff, obj))
		return int_to_rgb(obj)

	def to_internal_value(self, data):
		if not isinstance(data, str):
			raise ValidationError('Invalid type. Expected a string, but got \'{}\''.format(type(data).__name__))
		if not (len(data) == 6 or (len(data) == 7 and data[0] == '#')):
			raise ValidationError('Invalid length. String must have a length of 6, not {:d} (length does not include optional preceeding \'#\')'.format(len(data)))
		try:
			return rgb_to_int(data)
		except ValueError:
			raise ValidationError('Invalid string representation. Expected a hex string (with optional \'#\'), but got {}'.format(data))