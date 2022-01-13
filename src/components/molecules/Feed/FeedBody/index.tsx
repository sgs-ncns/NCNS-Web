import React, { FunctionComponent } from "react";
import Image from "components/atoms/Image";
import styled from "styled-components";

const FeedBody: FunctionComponent = () => {
	return (
		<StyledDiv>
			<Image option="feed" />
		</StyledDiv>
	);
};

export default FeedBody;

const StyledDiv = styled.div`
	border: 1px solid black;
	height: 100px;
`;
