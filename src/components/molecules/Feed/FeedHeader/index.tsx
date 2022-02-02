import { dropdownHandler } from "lib/Handler";
import { DropdownContainer } from "common/styles";
import Dropdown from "components/atoms/Dropdown";
import LinkedId from "components/atoms/LinkedId";
import ProfileImg from "components/atoms/ProfileImg";
import ButtonIcon from "components/molecules/ButtonIcon";
import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { closeMenu, openMenu } from "reducers/dropReducer";
import styled from "styled-components";

const FeedHeader: FunctionComponent = () => {
	const showFeed = useSelector(
		(state: RootState) => state.dropReducer.showFeed,
	);
	const dispatch = useDispatch();

	return (
		<Grid>
			<Header>
				<DropdownContainer>
					<ButtonIcon
						category={"feed"}
						onMouseOver={() => dispatch(openMenu("feed"))}
						onMouseLeave={() => dispatch(closeMenu("feed"))}
					/>
					{showFeed && <Dropdown category="feed" />}
				</DropdownContainer>
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
