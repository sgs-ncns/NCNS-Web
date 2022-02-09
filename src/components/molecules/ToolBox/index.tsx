import ButtonIcon from "components/molecules/ButtonIcon";
import LinkIcon from "components/atoms/LinkIcon";
import React, { FunctionComponent, useRef, useState } from "react";
import styled from "styled-components";
import Dropdown from "components/molecules/Dropdown";
import useOutsideClick from "hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { closeMenu, openMenu } from "reducers/dropReducer";
import { DropdownContainer } from "common/styles";
import { dropdownHandler } from "lib/Handler";
import { openModal, OPEN_UPLOAD_MODAL } from "reducers/modalReducer";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";

const ToolBox: FunctionComponent = () => {
	const navigate = useNavigate();
	const showNotify = useSelector(
		(state: RootState) => state.dropReducer.showNotify,
	);
	const showProfile = useSelector(
		(state: RootState) => state.dropReducer.showProfile,
	);
	const dispatch = useDispatch();

	return (
		<Grid>
			<ButtonIcon
				category={"icon"}
				name={"Home"}
				onClick={() => navigate("/")}
			/>
			<DropdownContainer>
				<ButtonIcon
					category={"icon"}
					name={"Like"}
					onClick={() => dropdownHandler("notify", showNotify, dispatch)}
				/>
				{showNotify && <Dropdown category="notify" />}
			</DropdownContainer>
			<ButtonIcon
				category={"icon"}
				name={"Upload"}
				onClick={() => dispatch(openModal(OPEN_UPLOAD_MODAL))}
			/>
			<DropdownContainer>
				<ButtonIcon
					category={"profile"}
					onClick={() => dropdownHandler("profile", showProfile, dispatch)}
				/>
				{showProfile && <Dropdown category="profile" />}
			</DropdownContainer>
		</Grid>
	);
};

export default ToolBox;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1.4em;
	grid-template-rows: 24px;
	align-items: center;
	justify-contents: center;
`;
