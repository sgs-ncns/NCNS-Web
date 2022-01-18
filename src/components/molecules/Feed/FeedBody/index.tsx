import React, { FunctionComponent } from "react";
import Image from "components/atoms/Image";
import styled from "styled-components";

const FeedBody: FunctionComponent = () => {
	return (
		<StyledDiv>
			<Image category={"rectangle"} width="614px" />
		</StyledDiv>
	);
};

export default FeedBody;

const StyledDiv = styled.div`
	padding: 0px 0px;
`;
