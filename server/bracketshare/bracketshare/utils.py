# Conversion Functions
# ==================================================

# rgb_to_int
# --------------------------------------------------
def rgb_to_int(rgb_string):
	# Exception Checks
	if not isinstance(rgb_string, str):
		raise TypeError('rgb_to_int() argument must be a string, not {}'.format(type(rgb_string).__name__))
	if not (len(rgb_string) == 6 or (len(rgb_string) == 7 and rgb_string[0] == '#')):
		raise ValueError('could not convert rgb_string to int: \'{}\''.format(rgb_string))
	# Implemenation
	return int(rgb_string if len(rgb_string) == 6 else rgb_string[1:], 16)


# int_to_rgb
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