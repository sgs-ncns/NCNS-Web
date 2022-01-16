import LinkedId from "components/atoms/LinkedId";
import ProfileImg from "components/atoms/ProfileImg";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const FeedHeader: FunctionComponent = () => {
	return (
		<Grid>
			<Header>
				<ProfileImg size="middle" />
				<StyledDiv>
					<LinkedId underline={true}>MyId</LinkedId>
				</StyledDiv>
			</Header>
		</Grid>
	);
};

const Grid = styled.div`
	display: flex;
	align-content: stretch;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	flex: 0 0 auto;
	background: #ffffff;
`;

const Header = styled.header`
	align-items: center;
	flex-direction: row;
	flex-grow: 1;
	width: calc(100% - 48px);
	padding: 14px 4px 14px 16px;
	display: flex;
`;

const StyledDiv = styled.div`
	align-items: flex-start;
	display: flex;
	flex-grow: 1;
	flex-shrink: 1;
	margin-left: 14px;
	overflow: hidden;
	width: 50px;
`;

export default FeedHeader;
