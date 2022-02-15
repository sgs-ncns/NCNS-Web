import { dropdownHandler } from "lib/Handler";
import { DropdownContainer } from "common/styles";
import Dropdown from "components/molecules/Dropdown";
import LinkedId from "components/atoms/LinkedId";
import ButtonIcon from "components/molecules/ButtonIcon";
import React, { FunctionComponent, RefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { closeMenu, openMenu } from "reducers/dropReducer";
import styled from "styled-components";

// 피드의 머릿부분입니다. 이 부분에는 mouseover시 드롭다운으로
// 사용자의 최근 세가지의 게시물을 보여주는 기능을 담을 예정입니다.

interface HeaderProps {
	id?: string;
	ref?: any;
}

const FeedHeader: FunctionComponent<HeaderProps> = (props) => {
	const { id = "MyId" } = props;
	const showFeed = useSelector(
		(state: RootState) => state.dropReducer.showFeed,
	);
	const dispatch = useDispatch();

	return (
		<Grid>
			<Header>
				<DropdownContainer>
					<ButtonIcon
						category={"profile"}
						onMouseOver={() => dispatch(openMenu("feed"))}
						onMouseLeave={() => dispatch(closeMenu("feed"))}
						hover={true}
					/>
					{showFeed && <Dropdown category="feed" />}
				</DropdownContainer>
				<StyledDiv>
					<LinkedId underline={true}>{id}</LinkedId>
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
