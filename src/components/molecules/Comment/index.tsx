import LinkedId from "components/atoms/LinkedId";
import React from "react";
import styled from "styled-components";
import ButtonIcon from "../ButtonIcon";

const Comment = () => {
	return (
		<Grid>
			<ButtonIcon category={"profile"} />
			<ContentGrid>
				<LinkedId underline={false}>누군가</LinkedId>
				contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
			</ContentGrid>
		</Grid>
	);
};

export default Comment;

const Grid = styled.div`
	display: flex;
`;

const ContentGrid = styled.span`
	width: 100%;
	word-break: break-all;
`;
