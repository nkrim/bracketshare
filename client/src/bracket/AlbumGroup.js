// @flow

import React, { Component } from 'react';
import Radium from 'radium';

/* AlbumGroup
 * ----------
 * props:
 * pk : string (optional - null indicates it must be saved)
 * name : string
 * bg_color : string
 * font_color : string
 */
export type AlbumGroupProps = {
	pk?: string,
	// Props
	name: string,
	// Styling
	bg_color: string,
	font_color: string,
};
export default class AlbumGroup extends Component<AlbumGroupProps> {
	static defaultProps = {
		// Styling
		bg_color: '#000',
		font_color: '#fff',
	};

	// Functions for importing/exporting of component
	exportProps() {
		return this.props;
	}
	static importProps(props : AlbumGroupProps) {
		return new AlbumGroup(props);
	}
}