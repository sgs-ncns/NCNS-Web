import ButtonIcon from "components/molecules/ButtonIcon";
import LinkIcon from "components/atoms/LinkIcon";
import React, { FunctionComponent, useRef, useState } from "react";
import styled from "styled-components";
import Dropdown from "components/atoms/Dropdown";
import useOutsideClick from "hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { closeMenu, openMenu } from "reducers/dropReducer";
import { DropdownContainer } from "common/styles";
import { dropdownHandler } from "common/Handler";

const ToolBox: FunctionComponent = () => {
	const showNotify = useSelector(
		(state: RootState) => state.dropReducer.showNotify,
	);
	const showProfile = useSelector(
		(state: RootState) => state.dropReducer.showProfile,
	);
	const dispatch = useDispatch();

	return (
		<Grid>
			<Item>
				<LinkIcon category={"home"} primary />
			</Item>
			<Item>
				<LinkIcon category={"message"} primary />
			</Item>
			<Item>
				<DropdownContainer>
					<ButtonIcon
						category={"icon"}
						name={"Like"}
						onClick={() => dropdownHandler("notify", showNotify, dispatch)}
					/>
					{showNotify && <Dropdown category="notify" />}
				</DropdownContainer>
			</Item>
			<Item>
				<LinkIcon category={"add"} primary />
			</Item>
			<Item>
				<DropdownContainer>
					<ButtonIcon
						category={"profile"}
						onClick={() => dropdownHandler("profile", showProfile, dispatch)}
					/>
					{showProfile && <Dropdown category="profile" />}
				</DropdownContainer>
			</Item>
		</Grid>
	);
};

export default ToolBox;

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
