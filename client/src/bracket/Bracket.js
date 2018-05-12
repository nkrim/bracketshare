// @flow

import React, { Component } from 'react';
import Radium from 'radium';

/* SETTINGS for bracket layout/sizing */
const branch_thickness = 4;
const branch_length = 100;
const podium_leg_height = 64;
const starting_leg_height_exp = 8;

/* FINAL VALUES for bracket layout - DO NOT CHANGE */
const leg_height_func = tier => Math.pow(2, starting_leg_height_exp - tier);

/* DYNAMIC VALUES set from the constants */
const radius = branch_thickness/2;
const leg_height_full_func = tier => leg_height_func(tier) + radius;

/* Helper methods */
function range(start, end, inclusive=false) {
	let arr = []
	let endVal = inclusive ? end+1 : end;
	for(let i=start; i<endVal; i++) {
		arr.push(i);
	}
	return arr;
}

/* BracketDimensions type */
type BracketDimensions = {
	vb_width: number,
	vb_height: number,
	podium_width: number
};

/* Bracket
 * -------
 * props:
 * tiers : int [1,6]
 * 
 * styling:
 * top_left_color : string
 * bot_left_color : string
 * top_right_color : string
 * bot_right_color : string
 */
type BracketProps = {
	// props
	tiers: number,
	// styling
	top_left_color : string,
 	bot_left_color : string,
 	top_right_color : string,
 	bot_right_color : string,
};
export default class Bracket extends Component<BracketProps> {
  	static defaultProps = {
  		// props
  		tiers: 6,
  		// styling
		top_left_color : 'red',
	 	bot_left_color : 'blue',
	 	top_right_color : 'purple',
	 	bot_right_color : 'green',
  	};

  	render() {
  		// Get relevant props
  		const {tiers, top_left_color, bot_left_color, top_right_color, bot_right_color} = this.props;

  		// Get view box dimensions
  		const bracket_dimensions = Bracket.calcViewBox(this.props.tiers);
  		const {vb_width, vb_height} = bracket_dimensions;
  		const viewbox = `0 0 ${vb_width} ${vb_height}`;

  		// Get quad-specific props
  		const q_tiers = tiers-1;

  		// Styling
  		const quad_colors = [
  			top_left_color,
  			bot_left_color,
  			top_right_color,
  			bot_right_color,
  		]
  		const b_styles = {
  			maxHeight: '90vh',
  		}

		return (
		 	<div className="Bracket">
				<svg id="bracketSvg" xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} style={b_styles}>
					<BracketPodium b_dims={bracket_dimensions}/>
					{
						range(0,4).map(q_index => 
							<BracketQuad 
								key={BracketQuad.quadIndexToString(q_index)} 
								index={q_index} 
								q_tiers={q_tiers} 
								b_dims={bracket_dimensions}
								color={quad_colors[q_index]}
							/>
						)
					}
				</svg>
			</div>
		);
  	}

  	static calcViewBox(tiers : number) : BracketDimensions {
  		/* Center width calc */
  		const podium_width = 3*branch_length + 2*branch_thickness;

  		// Get tiering properties
  		const q_tiers = tiers - 1;
  		const leaf_tier = q_tiers - 1;

  		// Edge-case for 1v1
  		if(leaf_tier < 0) {
  			return {
  				vb_width: podium_width,
  				vb_height: podium_leg_height + branch_thickness,
  				podium_width: podium_width
  			};
  		}

  		/* Height calc */
  		// Get leaf properties
  		const num_leaves = 2*Math.pow(2,leaf_tier);
		// Calc height
		const height = num_leaves * (2*leg_height_full_func(leaf_tier))

		/* Width calc */
		// Calc side width
		const side_width = branch_length * q_tiers;
		// Calc width
		const width = 2*side_width + podium_width;

		/* Return object */
		return {
			vb_width: width,
			vb_height: height,
			podium_width: podium_width
		};
  	}
}
/* Radium Wrapping */
Bracket = Radium(Bracket);

/* BracketPodium
 * -------------
 * props:
 * b_dims : BracketDimensions (viewbox width/height + podium_width)
 */
type BracketPodiumProps = {
	b_dims: BracketDimensions,
};
class BracketPodium extends Component<BracketPodiumProps> {
	render() {
		// Relevant props
		const {b_dims} = this.props;
		const {vb_width, vb_height} = b_dims;

		// Dimensions / coords - Universal
		const pod_rect_length = branch_length/2;
		const y_branch = vb_height/2 - radius;
		const y_leg = y_branch - podium_leg_height + radius;
		const y_pod = y_leg;
		// Classes - Universal
		const pod_classes = 'bracket-podium-winner';
		const leg_classes = 'bracket-podium-leg';
		const branch_classes = 'bracket-podium-branch';

		/* Construct podium right */
		// Dimensions / coords
		const x_pod_right = vb_width/2;
		const x_leg_right = x_pod_right + pod_rect_length - radius;
		const x_branch_right = x_leg_right + radius;
		// Classes
		const right_classes = 'bracket-podium-right';
		// Construct
		const pod_right = (
			<g className={right_classes}>
				<g className={pod_classes}>
					<rect x={x_pod_right} y={y_pod} width={pod_rect_length} height={branch_thickness}/>
					<circle cx={x_pod_right+pod_rect_length} cy={y_pod+radius} r={radius}/>
				</g>
				<g className={leg_classes}>
					<rect x={x_leg_right} y={y_leg} width={branch_thickness} height={podium_leg_height}/>
					<circle cx={x_leg_right+radius} cy={y_leg+podium_leg_height} r={radius}/>
				</g>
				<g className={branch_classes}>
					<rect x={x_branch_right} y={y_branch} width={branch_length} height={branch_thickness}/>
					<circle cx={x_branch_right+branch_length} cy={y_branch+radius} r={radius}/>
				</g>
			</g>
		);

		/* Construct podium right */
		// Dimensions / coords
		const x_pod_left = x_pod_right - pod_rect_length;
		const x_leg_left = x_pod_left - radius;
		const x_branch_left = x_leg_left - branch_length + radius;
		// Classes
		const left_classes = 'bracket-podium-left'
		// Construct
		const pod_left = (
			<g className={left_classes}>
				<g className={pod_classes}>
					<rect x={x_pod_left} y={y_pod} width={pod_rect_length} height={branch_thickness}/>
					<circle cx={x_pod_left} cy={y_pod+radius} r={radius}/>
				</g>
				<g className={leg_classes}>
					<rect x={x_leg_left} y={y_leg} width={branch_thickness} height={podium_leg_height}/>
					<circle cx={x_leg_left+radius} cy={y_leg+podium_leg_height} r={radius}/>
				</g>
				<g className={branch_classes}>
					<rect x={x_branch_left} y={y_branch} width={branch_length} height={branch_thickness}/>
					<circle cx={x_branch_left} cy={y_branch+radius} r={radius}/>
				</g>
			</g>
		);

		// Classes
		const classes = 'bracket-podium';

		// Render
		return (
			<g className={classes}>
				{pod_left}
				{pod_right}
			</g>
		);
	}
}

/* BracketQuad
 * -----------
 * props:
 * index : int (0=topleft, 1=botleft, 2=topright, 3=botright)
 * q_tiers : int [0,5]
 * b_dims : BracketDimensions (viewbox width/height + podium_width),
 */
type BracketQuadProps = {
	// props
	index: number,
	q_tiers: number, 
	b_dims: BracketDimensions,
	// styling
	color: string,
};
class BracketQuad extends Component<BracketQuadProps> {
	static defaultProps = {
		// styling
  		color: '#000',
  	};

	render() {
		// Relevant Props
		const {index, q_tiers, b_dims, color} = this.props;
		const {vb_width, vb_height, podium_width} = b_dims;
		const {top, left} = BracketQuad.evalIndex(index);

		// Early exit condition
		if(q_tiers <= 0)
			return;

		/* Generate tiers */
		let bracket_quad = [];

		/* TOP LEFT SIDE (for now) */
		// Tier 0 case
		let x_tier = left ? (vb_width - podium_width) / 2 - branch_length : (vb_width + podium_width) / 2 - branch_thickness;
		let y_tier = vb_height / 2 - (top ? leg_height_full_func(0) : 0);
		bracket_quad.push(
			<BracketTier key={0} x={x_tier} y={y_tier} tier={0} top={top} left={left}/>
		);

		// Tier 1 - N
		for(let i=1; i<q_tiers; i++) {
			// Find new x_tier
			x_tier = x_tier + (left ? -1 : 1)*branch_length;

			// Find new y_tier
			const tier_center_y = i===1 && !top ? y_tier + leg_height_func(i-1) : y_tier;
			y_tier = tier_center_y - leg_height_func(i);

			// Push new tier
			bracket_quad.push(
				<BracketTier key={i} x={x_tier} y={y_tier} tier={i} top={top} left={left}/>
			);
		}

		// Classes
		const classes = BracketQuad.quadIndexToString(index);

		// Styling
		const styles = {
			base: {
				fill: color,
			}
		}

		// Render quad
		return (
			<g className={classes} style={[styles.base]}>
				{bracket_quad}
			</g> 
		);
	}

	static evalIndex(index) {
		return {
			top: (index&0b01) === 0,
			left: (index&0b10) === 0
		};
	}

	static quadIndexToString(index) {
		const {top, left} = BracketQuad.evalIndex(index);
		return `${top ? 'top' : 'bot'}-${left ? 'left' : 'right'}-quad`;
	}
}
/* Radium Wrapping */
BracketQuad = Radium(BracketQuad);

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
				<g key={branch} className={classes}>
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





