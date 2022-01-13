import ImgIcon from "components/atoms/ImgIcon";
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
				<ImgIcon category={"home"} primary />
			</Item>
			<Item>
				<ImgIcon category={"message"} primary />
			</Item>
			<Item>
				<ImgIcon category={"like"} primary />
			</Item>
			<Item>
				<ImgIcon category={"add"} primary />
			</Item>
			<Item>profile</Item>
		</Grid>
	);
};

export default ToolBox;
