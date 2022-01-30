import ButtonIcon from "components/molecules/ButtonIcon";
import Icon from "components/atoms/Icon";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const FeedTool: FunctionComponent = () => {
	return (
		<StyledSection>
			<StyledButton>
				<Icon name={"Like"} hover={true} />
			</StyledButton>
			<StyledButton>
				<Icon name={"Comment"} hover={true} />
			</StyledButton>
			molecules/FeedTool is svg
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

const StyledButton = styled.section`
	align-items: center;
	background: 0 0;
	border: none;
	display: flex;
	padding: 6px;
	padding-left: 0px;
	padding-right: 12px;

	&:hover {
		cursor: pointer;
	}
`;
