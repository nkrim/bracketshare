// @flow

import React, { Component } from 'react';
import Radium from 'radium';

import { type AlbumGroupProps } from './AlbumGroup';
import { branch_length } from './BracketSVG';

/* SETTINGS for entry style */
const entry_height = 16;
const div_style_base = {
	// Layout styles
	display: 'inline-block',
	position: 'absolute',
	width: branch_length,
	height: entry_height,
	// Border styles
	borderStyle: 'solid',
	borderWidth: 3
};
const span_style_base = {
	// Layout styles
	display: 'block',
	height: '100%',
	lineHeight: `${entry_height}px`,
	textAlign: 'center',
	// Font styles
	fontSize: 12,
	fontWeight: 700,
	// Overflow handling
	whiteSpace: 'nowrap', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}

/* BracketEntry
 * ------------
 * props:
 * name : string
 * album_group : AlbumGroupProps
 * x : int,
 * y : int,
 */
type BracketEntryProps = {
	// Props
	name: string,
	album_group: AlbumGroupProps,
	x: number,
	y: number,
};
class BracketEntry extends Component<BracketEntryProps> {
	

	render() {
		// Get relevant props
		const { name, album_group, x, y } = this.props;
		const { bg_color, font_color } = album_group;

		// Styling
		const div_style = {
			// Positioning
			top: y,
			left: x,
			// Coloring
			background: bg_color,
			borderColor: font_color
		};
		const span_style = {
			// Coloring
			color: font_color,
		};

		// Classes
		const classes = 'bracket-entry';

		// Render
		return (
			<div className={classes} style={[div_style_base, div_style]}>
				<span style={[span_style_base, span_style]}>{name}</span>
			</div>
		);
	}
}
/* Radium Wrapping */
BracketEntry = Radium(BracketEntry);
/* Export default statement (post Radium) */
export default BracketEntry;