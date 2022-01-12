import ImgLink from "components/atoms/ImgLink";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Grid = styled.div`
	display: grid;
	width: 240px;
	grid-template-columns: repeat(5, 48px);
	grid-template-rows: 24px;
`;

const Item = styled.div`
	display: flex;
	justify-content: right;
`;

const ToolBox: FunctionComponent = () => {
	return (
		<Grid>
			<Item>
				<ImgLink category={"home"} primary />
			</Item>
			<Item>
				<ImgLink category={"message"} primary />
			</Item>
			<Item>
				<ImgLink category={"like"} primary />
			</Item>
			<Item>
				<ImgLink category={"add"} primary />
			</Item>
			<Item>profile</Item>
		</Grid>
	);
};

export default ToolBox;
