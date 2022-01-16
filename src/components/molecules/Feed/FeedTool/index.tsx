import ButtonIcon from "components/atoms/ButtonIcon";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const FeedTool: FunctionComponent = () => {
	return (
		<StyledSection>
			<ButtonIcon category="like" />
			<ButtonIcon category="comment" />
		</StyledSection>
	);
};

export default FeedTool;

const StyledSection = styled.section`
	background: #ffffff;
	display: flex;
	flex-direction: row;
	margin: 4px 0px 0px;
	padding: 6px 16px 8px;
`;
