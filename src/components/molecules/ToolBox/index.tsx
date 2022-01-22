import LinkIcon from "components/atoms/LinkIcon";
import React, { FunctionComponent, useState } from "react";
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
	const [showModal, setShowModal] = useState(false);
	return (
		<Grid>
			<Item>
				<LinkIcon category={"home"} primary />
			</Item>
			<Item>
				<LinkIcon category={"message"} primary />
			</Item>
			<Item>
				<LinkIcon category={"like"} primary />
			</Item>
			<Item>
				<LinkIcon category={"add"} primary />
			</Item>
			<Item>profile</Item>
		</Grid>
	);
};

export default ToolBox;
