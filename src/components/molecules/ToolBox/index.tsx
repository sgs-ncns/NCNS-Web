import ButtonIcon from "components/molecules/ButtonIcon";
import LinkIcon from "components/atoms/LinkIcon";
import React, { FunctionComponent, useRef, useState } from "react";
import styled from "styled-components";
import Dropdown from "components/molecules/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { DropdownContainer } from "common/styles";
import { dropdownHandler } from "lib/Handler";
import { openModal, OPEN_UPLOAD_MODAL } from "reducers/modalReducer";
import { useLocation, useNavigate } from "react-router-dom";

// 네비게이션 바에 사용되는 기능들을 담은 컴포넌트입니다.
// 언제 어디서나 떠 있기 때문에 전역 상태보다 지역 상태값을 사용하여
// url을 기억하여 채워진 이모티콘을 보여줍니다.

const ToolBox: FunctionComponent = () => {
	const location = useLocation().pathname;
	const navigate = useNavigate();
	console.log(location);
	const showNotify = useSelector(
		(state: RootState) => state.dropReducer.showNotify,
	);
	const showProfile = useSelector(
		(state: RootState) => state.dropReducer.showProfile,
	);
	const showUpload = useSelector(
		(state: RootState) => state.modalReducer.isUploadOpen,
	);
	const dispatch = useDispatch();

	return (
		<Grid>
			{location === "/" && !showNotify && !showUpload ? (
				<ButtonIcon
					category={"icon"}
					name={"HomeFilled"}
					onClick={() => navigate("/")}
				/>
			) : (
				<ButtonIcon
					category={"icon"}
					name={"Home"}
					onClick={() => navigate("/")}
				/>
			)}
			<DropdownContainer>
				{showNotify ? (
					<>
						<ButtonIcon
							category={"icon"}
							name={"LikeFilledBlack"}
							onClick={() => dropdownHandler("notify", showNotify, dispatch)}
						/>
						<Dropdown category="notify" />
					</>
				) : (
					<ButtonIcon
						category={"icon"}
						name={"Like"}
						onClick={() => dropdownHandler("notify", showNotify, dispatch)}
					/>
				)}
			</DropdownContainer>
			{showUpload ? (
				<ButtonIcon
					category={"icon"}
					name={"UploadFilled"}
					onClick={() => dispatch(openModal(OPEN_UPLOAD_MODAL))}
				/>
			) : (
				<ButtonIcon
					category={"icon"}
					name={"Upload"}
					onClick={() => dispatch(openModal(OPEN_UPLOAD_MODAL))}
				/>
			)}
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
