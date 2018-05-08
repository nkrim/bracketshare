// @flow

import React, { Component } from 'react';
import './bracket.css';

/* CONSTANT VALUES for bracket layout/sizing */
const branch_thickness = 6;
const branch_length = 100;
const leg_height_func = tier => Math.pow(2,8-tier);
const winner_leg_height = 64;

/* DYNAMIC VALUES set from the constants */
const radius = branch_thickness/2;
const branch_length_full = branch_length + radius;

/* Helper methods */
function range(start, end, inclusive=false) {
	let arr = []
	let endVal = inclusive ? end+1 : end;
	for(let i=start; i<endVal; i++) {
		arr.push(i);
	}
	return arr;
}

/* Bracket
 * -------
 * props:
 * tiers : int [1,6]
 */
type BracketProps = {
	tiers: number
};
export default class Bracket extends Component<BracketProps> {
  	static defaultProps = {
  		tiers: 6,
  	};

  	render() {
  		// Get viewport dimensions
  		const {vp_width, vp_height, center_width} = Bracket.calcViewport(this.props.tiers);
  		const viewport = `0 0 ${vp_width} ${vp_height}`;

		return (
		 	<div className="Bracket">
				<svg id="bracketSvg" xmlns="http://www.w3.org/2000/svg" viewBox={viewport}>
					<BracketTier x={0} y={0} tier={4} top={true} left={true}/>
				</svg>
			</div>
		);
  	}

  	static calcViewport(tiers) {
  		/* Center width calc */
  		const center_width = 3*branch_length + 2*branch_thickness;

  		// Get tiering properties
  		const q_tiers = tiers - 1;
  		const leaf_tier = q_tiers - 1;

  		// Edge-case for 1v1
  		if(leaf_tier < 0) {
  			return {
  				vp_width: center_width,
  				vp_height: winner_leg_height + branch_thickness,
  				center_width: center_width
  			};
  		}

  		/* Height calc */
  		// Get leaf properties
  		const num_leaf_pairs = Math.pow(2,leaf_tier);
		const leaf_spacing = 2*leg_height_func(leaf_tier);

		// Calc height
		const height = num_leaf_pairs * (branch_thickness+leaf_spacing)

		/* Width calc */
		// Calc side width
		const side_width = branch_length * q_tiers;
		// Calc width
		const width = 2*side_width + center_width;

		/* Return object */
		return {
			vp_width: width,
			vp_height: height,
			center_width: center_width
		};
  	}
}

/* BracketQuad
 * -----------
 * props:
 * index : int (0=topleft, 1=botleft, 2=topright, 3=botright)
 * q_tiers : int [0,5]
 * vp_width : int
 * vp_height : int
 * 
 * auto props:
 * top : bool (dependent on index)
 * left : bool (dependent on index)
 */
type BracketQuadProps = {
	index: number,
	q_tiers: number,
	vp_width: number,
	vp_height: number,
	center_width: number
};
class BracketQuad extends Component<BracketQuadProps> {
	evalIndex() {
		return {
			top: (this.props.index&0b01) === 0,
			left: (this.props.index&0b10) === 0
		};
	}

	render() {
		// Relevant Props
		const {q_tiers, vp_width, vp_height, center_width} = this.props;
		const {top, left} = this.evalIndex();

		// Early exit condition
		if(q_tiers <= 0)
			return;

		/* Generate tiers */
		let bracket_quad = [];

		/* TOP LEFT SIDE (for now) */
		// Tier 0 case
		let x_tier = (vp_width - center_width) / 2 - branch_length;
		let y_tier = vp_height / 2 - radius;
		bracket_quad.push(
			<BracketTier x={x_tier} y={y_tier} tier={0} top={true} left={true}/>
		);

		// Tier 1 - N
		for(let i=0; i<q_tiers; i++) {

		}

	}
}

/* BracketTier
 * -----------
 * props:
 * x : int
 * y: int
 * tier : int (nth tier from the start of the quad)
 * top: bool
 * left: bool
 */
type BracketTierProps = {
	x: number,
	y: number,
	tier: number,
	top: bool,
	left: bool
};
class BracketTier extends Component<BracketTierProps> {

	render() {
		// Relevant Props
		const {x, y, tier, top, left} = this.props;

		// Dimensions / coords
		const leg_height = leg_height_func(tier);
		const leg_height_full = leg_height + branch_thickness;
		const x_branch = left ? x : x+radius;
		const x_leg = left ? x+branch_length : x;

		// Classes
		const classes = `bracket-tier-${tier}`

		// Tier-0 condition
		if(tier === 0) {
			return (
				<g className={classes}>
					<BracketBranch x={x_branch} y={top ? y : y+leg_height-radius} left={left}/>
					<BracketLeg x={x_leg} y={y} tier={tier} up={top}/>
				</g>
			);
		}

		/* Generate branches */
		// Tier branch properties
		const num_branches = Math.pow(2,tier);
		const branch_spacing = 2*leg_height;

		// Map branches
		const bracket_tier = range(0,num_branches).map(branch => {
			// Dimensions / coords
			const up_leg = branch%2 === 0;
			const y_branch = y + branch * branch_spacing;
			const y_leg = up_leg ? y_branch : y_branch - leg_height + radius;  

			// Classes
			const classes = `bracket-tier-branch-${branch}`

			// Render branch
			return (
				<g className={classes}>
					<BracketBranch x={x_branch} y={y_branch} left={left}/>
					<BracketLeg x={x_leg} y={y_leg} tier={tier} up={up_leg}/>
				</g>
			);
		});

		// Render tier
		return (
			<g className={classes}>
				{bracket_tier}
			</g>
		);
	}
}

/* BracketBranch
 * -------------
 * props:
 * x : int
 * y : int
 * left : bool
 */
type BracketBranchProps = {
	x: number,
	y: number,
	left: bool
};
class BracketBranch extends Component<BracketBranchProps> {

	render() {
		// Relevant Props
		const { x, y, left } = this.props

		// Dimensions / coords
		const height = branch_thickness;
		const width = branch_length;
		const x_rect = left ? x + radius : x;
		const x_circ = left ? x + radius : x + width;
		const y_circ = y + radius;

		// Classes
		const classes = 'bracket-branch'

		// Render
		return (
			<g className={classes}>
				<rect x={x_rect} y={y} height={height} width={width}/>
				<circle cx={x_circ} cy={y_circ} r={radius}/>
			</g>
		);
	}
}

/* BracketLeg
 * ----------
 * props:
 * x : int
 * y : int
 * tier : int (0 is leg to semis)
 * up: bool
 */
type BracketLegProps = {
	x: number,
	y: number,
	tier: number,
	up: bool
};
class BracketLeg extends Component<BracketLegProps> {

	render() {
		// Relevant Props
		const { x, y, tier, up } = this.props;

		// Dimensions / coords
		const height = leg_height_func(tier);
		const width = branch_thickness;
		const y_rect = up ? y + radius : y;
		const x_circ = x + radius;
		const y_circ = up ? y + radius : y + height;

		// Classes
		const classes = 'bracket-leg'

		// Render
		return (
			<g className={classes}>
				<rect x={x} y={y_rect} height={height} width={width}/>
				<circle cx={x_circ} cy={y_circ} r={radius}/>
			</g>
		);
	}
}





