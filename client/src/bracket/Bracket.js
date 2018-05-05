// @flow

import React, { Component } from 'react';
import './bracket.css';

/* CONSTANT VALUES FOR BRACKET LAYOUT/SIZING */
const branch_thickness = 6;
const branch_length = 100;
const leg_height_func = tier => Math.pow(2,8-tier);

/* Bracket
 * -------
 * props:
 * size : int - 64 (as of right now, should be 4, 8, 16, 32, or 64)
 */
type BracketProps = {
	size: number,
};
export default class Bracket extends Component<BracketProps> {
  	static defaultProps = {
  		size: 64,
  	}

  	render() {

		return (
		 	<div className="Bracket">
				<svg id="bracketSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1267 992">
					<title>bracket</title><g id="Center"><g id="Left_Finalist" data-name="Left Finalist"><rect x="488" y="493" width="97" height="6"/><circle cx="488" cy="496" r="3"/></g><g id="Right_Finalist" data-name="Right Finalist"><rect x="682" y="493" width="97" height="6" transform="translate(1461 992) rotate(-180)"/><circle cx="779" cy="496" r="3"/></g><g id="Winner_Legs" data-name="Winner Legs"><rect x="582" y="432" width="6" height="64"/><circle cx="585" cy="496" r="3"/><rect x="679" y="432" width="6" height="64"/><circle cx="682" cy="496" r="3"/></g><g id="Winner"><rect x="585" y="429" width="97" height="6"/><circle cx="585" cy="432" r="3"/><circle cx="682" cy="432" r="3"/></g></g><g id="Bot_Right_Quad" data-name="Bot Right Quad"><g id="Tier_1" data-name="Tier 1"><rect x="1167" y="986" width="97" height="6" transform="translate(2431 1978) rotate(-180)"/><circle cx="1264" cy="989" r="3"/><rect x="1167" y="960" width="97" height="6" transform="translate(2431 1926) rotate(-180)"/><circle cx="1264" cy="963" r="3"/><rect x="1167" y="922" width="97" height="6" transform="translate(2431 1850) rotate(-180)"/><circle cx="1264" cy="925" r="3"/><rect x="1167" y="896" width="97" height="6" transform="translate(2431 1798) rotate(-180)"/><circle cx="1264" cy="899" r="3"/><rect x="1167" y="858" width="97" height="6" transform="translate(2431 1722) rotate(-180)"/><circle cx="1264" cy="861" r="3"/><rect x="1167" y="832" width="97" height="6" transform="translate(2431 1670) rotate(-180)"/><circle cx="1264" cy="835" r="3"/><rect x="1167" y="794" width="97" height="6" transform="translate(2431 1594) rotate(-180)"/><circle cx="1264" cy="797" r="3"/><rect x="1167" y="768" width="97" height="6" transform="translate(2431 1542) rotate(-180)"/><circle cx="1264" cy="771" r="3"/><rect x="1167" y="730" width="97" height="6" transform="translate(2431 1466) rotate(-180)"/><circle cx="1264" cy="733" r="3"/><rect x="1167" y="704" width="97" height="6" transform="translate(2431 1414) rotate(-180)"/><circle cx="1264" cy="707" r="3"/><rect x="1167" y="666" width="97" height="6" transform="translate(2431 1338) rotate(-180)"/><circle cx="1264" cy="669" r="3"/><rect x="1167" y="640" width="97" height="6" transform="translate(2431 1286) rotate(-180)"/><circle cx="1264" cy="643" r="3"/><rect x="1167" y="602" width="97" height="6" transform="translate(2431 1210) rotate(-180)"/><circle cx="1264" cy="605" r="3"/><rect x="1167" y="576" width="97" height="6" transform="translate(2431 1158) rotate(-180)"/><circle cx="1264" cy="579" r="3"/><rect x="1167" y="538" width="97" height="6" transform="translate(2431 1082) rotate(-180)"/><circle cx="1264" cy="541" r="3"/><rect x="1167" y="512" width="97" height="6" transform="translate(2431 1030) rotate(-180)"/><circle cx="1264" cy="515" r="3"/></g><g id="Tier_1_Down" data-name="Tier 1 Down"><rect x="1164" y="963" width="6" height="13" transform="translate(2334 1939) rotate(-180)"/><circle cx="1167" cy="963" r="3"/><rect x="1164" y="899" width="6" height="13" transform="translate(2334 1811) rotate(-180)"/><circle cx="1167" cy="899" r="3"/><rect x="1164" y="835" width="6" height="13" transform="translate(2334 1683) rotate(-180)"/><circle cx="1167" cy="835" r="3"/><rect x="1164" y="771" width="6" height="13" transform="translate(2334 1555) rotate(-180)"/><circle cx="1167" cy="771" r="3"/><rect x="1164" y="707" width="6" height="13" transform="translate(2334 1427) rotate(-180)"/><circle cx="1167" cy="707" r="3"/><rect x="1164" y="643" width="6" height="13" transform="translate(2334 1299) rotate(-180)"/><circle cx="1167" cy="643" r="3"/><rect x="1164" y="579" width="6" height="13" transform="translate(2334 1171) rotate(-180)"/><circle cx="1167" cy="579" r="3"/><rect x="1164" y="515" width="6" height="13" transform="translate(2334 1043) rotate(-180)"/><circle cx="1167" cy="515" r="3"/></g><g id="Tier_1_Up" data-name="Tier 1 Up"><rect x="1164" y="976" width="6" height="13"/><circle cx="1167" cy="989" r="3"/><rect x="1164" y="912" width="6" height="13"/><circle cx="1167" cy="925" r="3"/><rect x="1164" y="848" width="6" height="13"/><circle cx="1167" cy="861" r="3"/><rect x="1164" y="784" width="6" height="13"/><circle cx="1167" cy="797" r="3"/><rect x="1164" y="720" width="6" height="13"/><circle cx="1167" cy="733" r="3"/><rect x="1164" y="656" width="6" height="13"/><circle cx="1167" cy="669" r="3"/><rect x="1164" y="592" width="6" height="13"/><circle cx="1167" cy="605" r="3"/><rect x="1164" y="528" width="6" height="13"/><circle cx="1167" cy="541" r="3"/></g><g id="Tier_2" data-name="Tier 2"><rect x="1070" y="973" width="97" height="6" transform="translate(2237 1952) rotate(-180)"/><circle cx="1167" cy="976" r="3"/><rect x="1070" y="909" width="97" height="6" transform="translate(2237 1824) rotate(-180)"/><circle cx="1167" cy="912" r="3"/><rect x="1070" y="845" width="97" height="6" transform="translate(2237 1696) rotate(-180)"/><circle cx="1167" cy="848" r="3"/><rect x="1070" y="781" width="97" height="6" transform="translate(2237 1568) rotate(-180)"/><circle cx="1167" cy="784" r="3"/><rect x="1070" y="717" width="97" height="6" transform="translate(2237 1440) rotate(-180)"/><circle cx="1167" cy="720" r="3"/><rect x="1070" y="653" width="97" height="6" transform="translate(2237 1312) rotate(-180)"/><circle cx="1167" cy="656" r="3"/><rect x="1070" y="589" width="97" height="6" transform="translate(2237 1184) rotate(-180)"/><circle cx="1167" cy="592" r="3"/><rect x="1070" y="525" width="97" height="6" transform="translate(2237 1056) rotate(-180)"/><circle cx="1167" cy="528" r="3"/></g><g id="Tier_2_Down" data-name="Tier 2 Down"><rect x="1067" y="912" width="6" height="32" transform="translate(2140 1856) rotate(-180)"/><circle cx="1070" cy="912" r="3"/><rect x="1067" y="784" width="6" height="32" transform="translate(2140 1600) rotate(-180)"/><circle cx="1070" cy="784" r="3"/><rect x="1067" y="656" width="6" height="32" transform="translate(2140 1344) rotate(-180)"/><circle cx="1070" cy="656" r="3"/><rect x="1067" y="528" width="6" height="32" transform="translate(2140 1088) rotate(-180)"/><circle cx="1070" cy="528" r="3"/></g><g id="Tier_2_Up" data-name="Tier 2 Up"><rect x="1067" y="944" width="6" height="32"/><circle cx="1070" cy="976" r="3"/><rect x="1067" y="816" width="6" height="32"/><circle cx="1070" cy="848" r="3"/><rect x="1067" y="688" width="6" height="32"/><circle cx="1070" cy="720" r="3"/><rect x="1067" y="560" width="6" height="32"/><circle cx="1070" cy="592" r="3"/></g><g id="Tier_3" data-name="Tier 3"><rect x="973" y="941" width="97" height="6" transform="translate(2043 1888) rotate(-180)"/><circle cx="1070" cy="944" r="3"/><rect x="973" y="813" width="97" height="6" transform="translate(2043 1632) rotate(-180)"/><circle cx="1070" cy="816" r="3"/><rect x="973" y="685" width="97" height="6" transform="translate(2043 1376) rotate(-180)"/><circle cx="1070" cy="688" r="3"/><rect x="973" y="557" width="97" height="6" transform="translate(2043 1120) rotate(-180)"/><circle cx="1070" cy="560" r="3"/></g><g id="Tier_3_Down" data-name="Tier 3 Down"><rect x="970" y="816" width="6" height="64" transform="translate(1946 1696) rotate(-180)"/><circle cx="973" cy="816" r="3"/><rect x="970" y="560" width="6" height="64" transform="translate(1946 1184) rotate(-180)"/><circle cx="973" cy="560" r="3"/></g><g id="Tier_3_Up" data-name="Tier 3 Up"><rect x="970" y="624" width="6" height="64"/><circle cx="973" cy="688" r="3"/><rect x="970" y="880" width="6" height="64"/><circle cx="973" cy="944" r="3"/></g><g id="Tier_4" data-name="Tier 4"><rect x="876" y="877" width="97" height="6" transform="translate(1849 1760) rotate(-180)"/><circle cx="973" cy="880" r="3"/><rect x="876" y="621" width="97" height="6" transform="translate(1849 1248) rotate(-180)"/><circle cx="973" cy="624" r="3"/></g><g id="Tier_4_Down" data-name="Tier 4 Down"><rect x="873" y="624" width="6" height="128" transform="translate(1752 1376) rotate(-180)"/><circle cx="876" cy="624" r="3"/></g><g id="Tier_4_Up" data-name="Tier 4 Up"><rect x="873" y="752" width="6" height="128"/><circle cx="876" cy="880" r="3"/></g><g id="Tier_5" data-name="Tier 5"><rect x="779" y="749" width="97" height="6" transform="translate(1655 1504) rotate(-180)"/><circle cx="876" cy="752" r="3"/></g><g id="Tier_5_Up" data-name="Tier 5 Up"><rect x="776" y="496" width="6" height="256"/><circle cx="779" cy="752" r="3"/></g></g><g id="Top_Right_Quad" data-name="Top Right Quad"><g id="Tier_1" data-name="Tier 1"><rect x="1167" width="97" height="6" transform="translate(2431 6) rotate(-180)"/><circle cx="1264" cy="3" r="3"/><rect x="1167" y="26" width="97" height="6" transform="translate(2431 58) rotate(-180)"/><circle cx="1264" cy="29" r="3"/><rect x="1167" y="64" width="97" height="6" transform="translate(2431 134) rotate(-180)"/><circle cx="1264" cy="67" r="3"/><rect x="1167" y="90" width="97" height="6" transform="translate(2431 186) rotate(-180)"/><circle cx="1264" cy="93" r="3"/><rect x="1167" y="128" width="97" height="6" transform="translate(2431 262) rotate(-180)"/><circle cx="1264" cy="131" r="3"/><rect x="1167" y="154" width="97" height="6" transform="translate(2431 314) rotate(-180)"/><circle cx="1264" cy="157" r="3"/><rect x="1167" y="192" width="97" height="6" transform="translate(2431 390) rotate(-180)"/><circle cx="1264" cy="195" r="3"/><rect x="1167" y="218" width="97" height="6" transform="translate(2431 442) rotate(-180)"/><circle cx="1264" cy="221" r="3"/><rect x="1167" y="256" width="97" height="6" transform="translate(2431 518) rotate(-180)"/><circle cx="1264" cy="259" r="3"/><rect x="1167" y="282" width="97" height="6" transform="translate(2431 570) rotate(-180)"/><circle cx="1264" cy="285" r="3"/><rect x="1167" y="320" width="97" height="6" transform="translate(2431 646) rotate(-180)"/><circle cx="1264" cy="323" r="3"/><rect x="1167" y="346" width="97" height="6" transform="translate(2431 698) rotate(-180)"/><circle cx="1264" cy="349" r="3"/><rect x="1167" y="384" width="97" height="6" transform="translate(2431 774) rotate(-180)"/><circle cx="1264" cy="387" r="3"/><rect x="1167" y="410" width="97" height="6" transform="translate(2431 826) rotate(-180)"/><circle cx="1264" cy="413" r="3"/><rect x="1167" y="448" width="97" height="6" transform="translate(2431 902) rotate(-180)"/><circle cx="1264" cy="451" r="3"/><rect x="1167" y="474" width="97" height="6" transform="translate(2431 954) rotate(-180)"/><circle cx="1264" cy="477" r="3"/></g><g id="Tier_1_Down" data-name="Tier 1 Down"><rect x="1164" y="16" width="6" height="13" transform="translate(2334 45) rotate(-180)"/><circle cx="1167" cy="29" r="3"/><rect x="1164" y="80" width="6" height="13" transform="translate(2334 173) rotate(-180)"/><circle cx="1167" cy="93" r="3"/><rect x="1164" y="144" width="6" height="13" transform="translate(2334 301) rotate(-180)"/><circle cx="1167" cy="157" r="3"/><rect x="1164" y="208" width="6" height="13" transform="translate(2334 429) rotate(-180)"/><circle cx="1167" cy="221" r="3"/><rect x="1164" y="272" width="6" height="13" transform="translate(2334 557) rotate(-180)"/><circle cx="1167" cy="285" r="3"/><rect x="1164" y="336" width="6" height="13" transform="translate(2334 685) rotate(-180)"/><circle cx="1167" cy="349" r="3"/><rect x="1164" y="400" width="6" height="13" transform="translate(2334 813) rotate(-180)"/><circle cx="1167" cy="413" r="3"/><rect x="1164" y="464" width="6" height="13" transform="translate(2334 941) rotate(-180)"/><circle cx="1167" cy="477" r="3"/></g><g id="Tier_1_Up" data-name="Tier 1 Up"><rect x="1164" y="3" width="6" height="13"/><circle cx="1167" cy="3" r="3"/><rect x="1164" y="67" width="6" height="13"/><circle cx="1167" cy="67" r="3"/><rect x="1164" y="131" width="6" height="13"/><circle cx="1167" cy="131" r="3"/><rect x="1164" y="195" width="6" height="13"/><circle cx="1167" cy="195" r="3"/><rect x="1164" y="259" width="6" height="13"/><circle cx="1167" cy="259" r="3"/><rect x="1164" y="323" width="6" height="13"/><circle cx="1167" cy="323" r="3"/><rect x="1164" y="387" width="6" height="13"/><circle cx="1167" cy="387" r="3"/><rect x="1164" y="451" width="6" height="13"/><circle cx="1167" cy="451" r="3"/></g><g id="Tier_2" data-name="Tier 2"><rect x="1070" y="13" width="97" height="6" transform="translate(2237 32) rotate(-180)"/><circle cx="1167" cy="16" r="3"/><rect x="1070" y="77" width="97" height="6" transform="translate(2237 160) rotate(-180)"/><circle cx="1167" cy="80" r="3"/><rect x="1070" y="141" width="97" height="6" transform="translate(2237 288) rotate(-180)"/><circle cx="1167" cy="144" r="3"/><rect x="1070" y="205" width="97" height="6" transform="translate(2237 416) rotate(-180)"/><circle cx="1167" cy="208" r="3"/><rect x="1070" y="269" width="97" height="6" transform="translate(2237 544) rotate(-180)"/><circle cx="1167" cy="272" r="3"/><rect x="1070" y="333" width="97" height="6" transform="translate(2237 672) rotate(-180)"/><circle cx="1167" cy="336" r="3"/><rect x="1070" y="397" width="97" height="6" transform="translate(2237 800) rotate(-180)"/><circle cx="1167" cy="400" r="3"/><rect x="1070" y="461" width="97" height="6" transform="translate(2237 928) rotate(-180)"/><circle cx="1167" cy="464" r="3"/></g><g id="Tier_2_Down" data-name="Tier 2 Down"><rect x="1067" y="48" width="6" height="32" transform="translate(2140 128) rotate(-180)"/><circle cx="1070" cy="80" r="3"/><rect x="1067" y="176" width="6" height="32" transform="translate(2140 384) rotate(-180)"/><circle cx="1070" cy="208" r="3"/><rect x="1067" y="304" width="6" height="32" transform="translate(2140 640) rotate(-180)"/><circle cx="1070" cy="336" r="3"/><rect x="1067" y="432" width="6" height="32" transform="translate(2140 896) rotate(-180)"/><circle cx="1070" cy="464" r="3"/></g><g id="Tier_2_Up" data-name="Tier 2 Up"><rect x="1067" y="16" width="6" height="32"/><circle cx="1070" cy="16" r="3"/><rect x="1067" y="144" width="6" height="32"/><circle cx="1070" cy="144" r="3"/><rect x="1067" y="272" width="6" height="32"/><circle cx="1070" cy="272" r="3"/><rect x="1067" y="400" width="6" height="32"/><circle cx="1070" cy="400" r="3"/></g><g id="Tier_3" data-name="Tier 3"><rect x="973" y="45" width="97" height="6" transform="translate(2043 96) rotate(-180)"/><circle cx="1070" cy="48" r="3"/><rect x="973" y="173" width="97" height="6" transform="translate(2043 352) rotate(-180)"/><circle cx="1070" cy="176" r="3"/><rect x="973" y="301" width="97" height="6" transform="translate(2043 608) rotate(-180)"/><circle cx="1070" cy="304" r="3"/><rect x="973" y="429" width="97" height="6" transform="translate(2043 864) rotate(-180)"/><circle cx="1070" cy="432" r="3"/></g><g id="Tier_3_Down" data-name="Tier 3 Down"><rect x="970" y="112" width="6" height="64" transform="translate(1946 288) rotate(-180)"/><circle cx="973" cy="176" r="3"/><rect x="970" y="368" width="6" height="64" transform="translate(1946 800) rotate(-180)"/><circle cx="973" cy="432" r="3"/></g><g id="Tier_3_Up" data-name="Tier 3 Up"><rect x="970" y="304" width="6" height="64"/><circle cx="973" cy="304" r="3"/><rect x="970" y="48" width="6" height="64"/><circle cx="973" cy="48" r="3"/></g><g id="Tier_4" data-name="Tier 4"><rect x="876" y="109" width="97" height="6" transform="translate(1849 224) rotate(-180)"/><circle cx="973" cy="112" r="3"/><rect x="876" y="365" width="97" height="6" transform="translate(1849 736) rotate(-180)"/><circle cx="973" cy="368" r="3"/></g><g id="Tier_4_Down" data-name="Tier 4 Down"><rect x="873" y="240" width="6" height="128" transform="translate(1752 608) rotate(-180)"/><circle cx="876" cy="368" r="3"/></g><g id="Tier_4_Up" data-name="Tier 4 Up"><rect x="873" y="112" width="6" height="128"/><circle cx="876" cy="112" r="3"/></g><g id="Tier_5" data-name="Tier 5"><rect x="779" y="237" width="97" height="6" transform="translate(1655 480) rotate(-180)"/><circle cx="876" cy="240" r="3"/></g><g id="Tier_5_Up" data-name="Tier 5 Up"><rect x="776" y="240" width="6" height="256"/><circle cx="779" cy="240" r="3"/></g></g><g id="Bot_Left_Quad" data-name="Bot Left Quad"><g id="Tier_1" data-name="Tier 1"><rect x="3" y="986" width="97" height="6"/><circle cx="3" cy="989" r="3"/><rect x="3" y="960" width="97" height="6"/><circle cx="3" cy="963" r="3"/><rect x="3" y="922" width="97" height="6"/><circle cx="3" cy="925" r="3"/><rect x="3" y="896" width="97" height="6"/><circle cx="3" cy="899" r="3"/><rect x="3" y="858" width="97" height="6"/><circle cx="3" cy="861" r="3"/><rect x="3" y="832" width="97" height="6"/><circle cx="3" cy="835" r="3"/><rect x="3" y="794" width="97" height="6"/><circle cx="3" cy="797" r="3"/><rect x="3" y="768" width="97" height="6"/><circle cx="3" cy="771" r="3"/><rect x="3" y="730" width="97" height="6"/><circle cx="3" cy="733" r="3"/><rect x="3" y="704" width="97" height="6"/><circle cx="3" cy="707" r="3"/><rect x="3" y="666" width="97" height="6"/><circle cx="3" cy="669" r="3"/><rect x="3" y="640" width="97" height="6"/><circle cx="3" cy="643" r="3"/><rect x="3" y="602" width="97" height="6"/><circle cx="3" cy="605" r="3"/><rect x="3" y="576" width="97" height="6"/><circle cx="3" cy="579" r="3"/><rect x="3" y="538" width="97" height="6"/><circle cx="3" cy="541" r="3"/><rect x="3" y="512" width="97" height="6"/><circle cx="3" cy="515" r="3"/></g><g id="Tier_1_Down" data-name="Tier 1 Down"><rect x="97" y="963" width="6" height="13"/><circle cx="100" cy="963" r="3"/><rect x="97" y="899" width="6" height="13"/><circle cx="100" cy="899" r="3"/><rect x="97" y="835" width="6" height="13"/><circle cx="100" cy="835" r="3"/><rect x="97" y="771" width="6" height="13"/><circle cx="100" cy="771" r="3"/><rect x="97" y="707" width="6" height="13"/><circle cx="100" cy="707" r="3"/><rect x="97" y="643" width="6" height="13"/><circle cx="100" cy="643" r="3"/><rect x="97" y="579" width="6" height="13"/><circle cx="100" cy="579" r="3"/><rect x="97" y="515" width="6" height="13"/><circle cx="100" cy="515" r="3"/></g><g id="Tier_1_Up" data-name="Tier 1 Up"><rect x="97" y="976" width="6" height="13" transform="translate(200 1965) rotate(180)"/><circle cx="100" cy="989" r="3"/><rect x="97" y="912" width="6" height="13" transform="translate(200 1837) rotate(180)"/><circle cx="100" cy="925" r="3"/><rect x="97" y="848" width="6" height="13" transform="translate(200 1709) rotate(180)"/><circle cx="100" cy="861" r="3"/><rect x="97" y="784" width="6" height="13" transform="translate(200 1581) rotate(180)"/><circle cx="100" cy="797" r="3"/><rect x="97" y="720" width="6" height="13" transform="translate(200 1453) rotate(180)"/><circle cx="100" cy="733" r="3"/><rect x="97" y="656" width="6" height="13" transform="translate(200 1325) rotate(180)"/><circle cx="100" cy="669" r="3"/><rect x="97" y="592" width="6" height="13" transform="translate(200 1197) rotate(180)"/><circle cx="100" cy="605" r="3"/><rect x="97" y="528" width="6" height="13" transform="translate(200 1069) rotate(180)"/><circle cx="100" cy="541" r="3"/></g><g id="Tier_2" data-name="Tier 2"><rect x="100" y="973" width="97" height="6"/><circle cx="100" cy="976" r="3"/><rect x="100" y="909" width="97" height="6"/><circle cx="100" cy="912" r="3"/><rect x="100" y="845" width="97" height="6"/><circle cx="100" cy="848" r="3"/><rect x="100" y="781" width="97" height="6"/><circle cx="100" cy="784" r="3"/><rect x="100" y="717" width="97" height="6"/><circle cx="100" cy="720" r="3"/><rect x="100" y="653" width="97" height="6"/><circle cx="100" cy="656" r="3"/><rect x="100" y="589" width="97" height="6"/><circle cx="100" cy="592" r="3"/><rect x="100" y="525" width="97" height="6"/><circle cx="100" cy="528" r="3"/></g><g id="Tier_2_Down" data-name="Tier 2 Down"><rect x="194" y="912" width="6" height="32"/><circle cx="197" cy="912" r="3"/><rect x="194" y="784" width="6" height="32"/><circle cx="197" cy="784" r="3"/><rect x="194" y="656" width="6" height="32"/><circle cx="197" cy="656" r="3"/><rect x="194" y="528" width="6" height="32"/><circle cx="197" cy="528" r="3"/></g><g id="Tier_2_Up" data-name="Tier 2 Up"><rect x="194" y="944" width="6" height="32" transform="translate(394 1920) rotate(180)"/><circle cx="197" cy="976" r="3"/><rect x="194" y="816" width="6" height="32" transform="translate(394 1664) rotate(180)"/><circle cx="197" cy="848" r="3"/><rect x="194" y="688" width="6" height="32" transform="translate(394 1408) rotate(180)"/><circle cx="197" cy="720" r="3"/><rect x="194" y="560" width="6" height="32" transform="translate(394 1152) rotate(180)"/><circle cx="197" cy="592" r="3"/></g><g id="Tier_3" data-name="Tier 3"><rect x="197" y="941" width="97" height="6"/><circle cx="197" cy="944" r="3"/><rect x="197" y="813" width="97" height="6"/><circle cx="197" cy="816" r="3"/><rect x="197" y="685" width="97" height="6"/><circle cx="197" cy="688" r="3"/><rect x="197" y="557" width="97" height="6"/><circle cx="197" cy="560" r="3"/></g><g id="Tier_3_Down" data-name="Tier 3 Down"><rect x="291" y="816" width="6" height="64"/><circle cx="294" cy="816" r="3"/><rect x="291" y="560" width="6" height="64"/><circle cx="294" cy="560" r="3"/></g><g id="Tier_3_Up" data-name="Tier 3 Up"><rect x="291" y="624" width="6" height="64" transform="translate(588 1312) rotate(180)"/><circle cx="294" cy="688" r="3"/><rect x="291" y="880" width="6" height="64" transform="translate(588 1824) rotate(180)"/><circle cx="294" cy="944" r="3"/></g><g id="Tier_4" data-name="Tier 4"><rect x="294" y="877" width="97" height="6"/><circle cx="294" cy="880" r="3"/><rect x="294" y="621" width="97" height="6"/><circle cx="294" cy="624" r="3"/></g><g id="Tier_4_Down" data-name="Tier 4 Down"><rect x="388" y="624" width="6" height="128"/><circle cx="391" cy="624" r="3"/></g><g id="Tier_4_Up" data-name="Tier 4 Up"><rect x="388" y="752" width="6" height="128" transform="translate(782 1632) rotate(180)"/><circle cx="391" cy="880" r="3"/></g><g id="Tier_5" data-name="Tier 5"><rect x="391" y="749" width="97" height="6"/><circle cx="391" cy="752" r="3"/></g><g id="Tier_5_Up" data-name="Tier 5 Up"><rect x="485" y="496" width="6" height="256" transform="translate(976 1248) rotate(180)"/><circle cx="488" cy="752" r="3"/></g></g><g id="Top_Left_Quad" data-name="Top Left Quad"><g id="Tier_1" data-name="Tier 1"><rect x="3" width="97" height="6"/><circle cx="3" cy="3" r="3"/><rect x="3" y="26" width="97" height="6"/><circle cx="3" cy="29" r="3"/><rect x="3" y="64" width="97" height="6"/><circle cx="3" cy="67" r="3"/><rect x="3" y="90" width="97" height="6"/><circle cx="3" cy="93" r="3"/><rect x="3" y="128" width="97" height="6"/><circle cx="3" cy="131" r="3"/><rect x="3" y="154" width="97" height="6"/><circle cx="3" cy="157" r="3"/><rect x="3" y="192" width="97" height="6"/><circle cx="3" cy="195" r="3"/><rect x="3" y="218" width="97" height="6"/><circle cx="3" cy="221" r="3"/><rect x="3" y="256" width="97" height="6"/><circle cx="3" cy="259" r="3"/><rect x="3" y="282" width="97" height="6"/><circle cx="3" cy="285" r="3"/><rect x="3" y="320" width="97" height="6"/><circle cx="3" cy="323" r="3"/><rect x="3" y="346" width="97" height="6"/><circle cx="3" cy="349" r="3"/><rect x="3" y="384" width="97" height="6"/><circle cx="3" cy="387" r="3"/><rect x="3" y="410" width="97" height="6"/><circle cx="3" cy="413" r="3"/><rect x="3" y="448" width="97" height="6"/><circle cx="3" cy="451" r="3"/><rect x="3" y="474" width="97" height="6"/><circle cx="3" cy="477" r="3"/></g><g id="Tier_1_Down" data-name="Tier 1 Down"><rect x="97" y="16" width="6" height="13"/><circle cx="100" cy="29" r="3"/><rect x="97" y="80" width="6" height="13"/><circle cx="100" cy="93" r="3"/><rect x="97" y="144" width="6" height="13"/><circle cx="100" cy="157" r="3"/><rect x="97" y="208" width="6" height="13"/><circle cx="100" cy="221" r="3"/><rect x="97" y="272" width="6" height="13"/><circle cx="100" cy="285" r="3"/><rect x="97" y="336" width="6" height="13"/><circle cx="100" cy="349" r="3"/><rect x="97" y="400" width="6" height="13"/><circle cx="100" cy="413" r="3"/><rect x="97" y="464" width="6" height="13"/><circle cx="100" cy="477" r="3"/></g><g id="Tier_1_Up" data-name="Tier 1 Up"><rect x="97" y="3" width="6" height="13" transform="translate(200 19) rotate(-180)"/><circle cx="100" cy="3" r="3"/><rect x="97" y="67" width="6" height="13" transform="translate(200 147) rotate(-180)"/><circle cx="100" cy="67" r="3"/><rect x="97" y="131" width="6" height="13" transform="translate(200 275) rotate(-180)"/><circle cx="100" cy="131" r="3"/><rect x="97" y="195" width="6" height="13" transform="translate(200 403) rotate(-180)"/><circle cx="100" cy="195" r="3"/><rect x="97" y="259" width="6" height="13" transform="translate(200 531) rotate(-180)"/><circle cx="100" cy="259" r="3"/><rect x="97" y="323" width="6" height="13" transform="translate(200 659) rotate(-180)"/><circle cx="100" cy="323" r="3"/><rect x="97" y="387" width="6" height="13" transform="translate(200 787) rotate(-180)"/><circle cx="100" cy="387" r="3"/><rect x="97" y="451" width="6" height="13" transform="translate(200 915) rotate(-180)"/><circle cx="100" cy="451" r="3"/></g><g id="Tier_2" data-name="Tier 2"><rect x="100" y="13" width="97" height="6"/><circle cx="100" cy="16" r="3"/><rect x="100" y="77" width="97" height="6"/><circle cx="100" cy="80" r="3"/><rect x="100" y="141" width="97" height="6"/><circle cx="100" cy="144" r="3"/><rect x="100" y="205" width="97" height="6"/><circle cx="100" cy="208" r="3"/><rect x="100" y="269" width="97" height="6"/><circle cx="100" cy="272" r="3"/><rect x="100" y="333" width="97" height="6"/><circle cx="100" cy="336" r="3"/><rect x="100" y="397" width="97" height="6"/><circle cx="100" cy="400" r="3"/><rect x="100" y="461" width="97" height="6"/><circle cx="100" cy="464" r="3"/></g><g id="Tier_2_Down" data-name="Tier 2 Down"><rect x="194" y="48" width="6" height="32"/><circle cx="197" cy="80" r="3"/><rect x="194" y="176" width="6" height="32"/><circle cx="197" cy="208" r="3"/><rect x="194" y="304" width="6" height="32"/><circle cx="197" cy="336" r="3"/><rect x="194" y="432" width="6" height="32"/><circle cx="197" cy="464" r="3"/></g><g id="Tier_2_Up" data-name="Tier 2 Up"><rect x="194" y="16" width="6" height="32" transform="translate(394 64) rotate(-180)"/><circle cx="197" cy="16" r="3"/><rect x="194" y="144" width="6" height="32" transform="translate(394 320) rotate(-180)"/><circle cx="197" cy="144" r="3"/><rect x="194" y="272" width="6" height="32" transform="translate(394 576) rotate(-180)"/><circle cx="197" cy="272" r="3"/><rect x="194" y="400" width="6" height="32" transform="translate(394 832) rotate(-180)"/><circle cx="197" cy="400" r="3"/></g><g id="Tier_3" data-name="Tier 3"><rect x="197" y="45" width="97" height="6"/><circle cx="197" cy="48" r="3"/><rect x="197" y="173" width="97" height="6"/><circle cx="197" cy="176" r="3"/><rect x="197" y="301" width="97" height="6"/><circle cx="197" cy="304" r="3"/><rect x="197" y="429" width="97" height="6"/><circle cx="197" cy="432" r="3"/></g><g id="Tier_3_Down" data-name="Tier 3 Down"><rect x="291" y="112" width="6" height="64"/><circle cx="294" cy="176" r="3"/><rect x="291" y="368" width="6" height="64"/><circle cx="294" cy="432" r="3"/></g><g id="Tier_3_Up" data-name="Tier 3 Up"><rect x="291" y="304" width="6" height="64" transform="translate(588 672) rotate(-180)"/><circle cx="294" cy="304" r="3"/><rect x="291" y="48" width="6" height="64" transform="translate(588 160) rotate(-180)"/><circle cx="294" cy="48" r="3"/></g><g id="Tier_4" data-name="Tier 4"><rect x="294" y="109" width="97" height="6"/><circle cx="294" cy="112" r="3"/><rect x="294" y="365" width="97" height="6"/><circle cx="294" cy="368" r="3"/></g><g id="Tier_4_Down" data-name="Tier 4 Down"><rect x="388" y="240" width="6" height="128"/><circle cx="391" cy="368" r="3"/></g><g id="Tier_4_Up" data-name="Tier 4 Up"><rect x="388" y="112" width="6" height="128" transform="translate(782 352) rotate(-180)"/><circle cx="391" cy="112" r="3"/></g><g id="Tier_5" data-name="Tier 5"><rect x="391" y="237" width="97" height="6"/><circle cx="391" cy="240" r="3"/></g><g id="Tier_5_Up" data-name="Tier 5 Up"><rect x="485" y="240" width="6" height="256" transform="translate(976 736) rotate(-180)"/><circle cx="488" cy="240" r="3"/></g></g>
				</svg>
			</div>
		);
  	}

  	generateSvg() {
  		//DO ERROR HANDLING LATER, CAN'T BE BOTHERED

  		// Relevant Props
  		const {size} = this.props;

  		// Generate base svg
  	}
}

/* BracketQuad
 * -----------
 * props:
 * index : int (0=topleft, 1=botleft, 2=topright, 3=botright)
 * q_size : int (# of entries in quad, for robustness in the case of non-standard bracket sizes)
 * vp_width : int
 * vp_height : int
 * 
 * auto props:
 * top : bool (dependent on index)
 * left : bool (dependent on index)
 */
type BracketQuadProps = {
	index: number,
	q_size: number,
	vp_width: number,
	vp_height: number,
	top?: bool,
	left?: bool,
};
class BracketQuad extends Component<BracketQuadProps> {
	constructor(props) {
		// Auto-generate `top` and `left` bools from index
		const { index } = props; 
		props.top  = (index&0b01) == 0;
		props.left = (index&0b10) == 0;

		// Super call
		super(props);
	}
}

/* BracketTier
 * -----------
 * props:
 * x : int
 * y: int
 * tier : int (# of entries in this tier)
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
		const radius = branch_thickness/2;
		const x_branch = x + radius;
		const x_leg = left ? x_branch+branch_length : x;

		// Classes
		const classes = `bracket-tier-${tier}`

		// Tier-0 condition
		if(tier == 0) {
			return (
				<g className={classes}>
					<BracketBranch x={x_branch} y={top ? y : y+leg_height_func(tier)-radius} left={left}/>
					<BracketLeg x={x_leg} y={y+radius} tier={tier} up={!top}/>
				</g>
			);
		}

		// Generate branches
		const num_branches = Math.pow(2,tier);
		const branch_spacing = 2*leg_height_func(tier);
		// const bracket_tier = 

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
		const radius = branch_thickness/2;

		// Classes
		const classes = 'bracket-branch'

		// Render
		return (
			<g className={classes}>
				<rect x={x} y={y} height={height} width={width}/>
				<circle cx={left ? x : x+width} cy={y+radius} r={radius}/>
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
		const { x, y, tier, up } = this.props

		// Dimensions / coords
		const height = leg_height_func(tier);
		const width = branch_thickness;
		const radius = branch_thickness/2;

		// Classes
		const classes = 'bracket-leg'

		// Render
		return (
			<g className={classes}>
				<rect x={x} y={y} height={height} width={width}/>
				<circle cx={x+radius} cy={up ? y : y+height} r={radius}/>
			</g>
		);
	}
}





