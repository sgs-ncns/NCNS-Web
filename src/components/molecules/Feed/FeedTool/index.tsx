import ButtonIcon from "components/molecules/ButtonIcon";
import Icon from "components/atoms/Icon";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Count from "components/atoms/Count";

interface ToolProps {
	likeCount?: number;
}

const FeedTool: FunctionComponent<ToolProps> = (props) => {
	const { likeCount = 1000 } = props;
	return (
		<div>
			<StyledSection>
				<StyledButton>
					<Icon name={"Like"} hover={true} />
				</StyledButton>
				<StyledButton>
					<Icon name={"Comment"} hover={true} />
				</StyledButton>
			</StyledSection>
			<StyledDiv>
				<Count title={"좋아요"} number={likeCount} />
			</StyledDiv>
		</div>
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
	border: 1px solid black;
	border: none;
	display: flex;
	padding: 6px;
	padding-left: 0px;
	padding-right: 12px;

	&:hover {
		cursor: pointer;
	}
`;

const StyledDiv = styled.div`
	padding-left: 20px;
	margin-bottom: 10px;
`;
