import React from "react";
import StyledModal from "components/atoms/Modal";
import styled, { css } from "styled-components";
import Image from "components/atoms/Image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";

const Modal = () => {
	const isUploadOpen = useSelector(
		(state: RootState) => state.modalReducer.isUploadOpen,
	);
	const isProfileOpen = useSelector(
		(state: RootState) => state.modalReducer.isProfileOpen,
	);

	return isUploadOpen && !isProfileOpen ? (
		<StyledModal category="upload" isOpen={isUploadOpen}>
			<Grid checkUpload={isUploadOpen}>
				<div>이미지 업로드 박스</div>
			</Grid>
		</StyledModal>
	) : (
		<StyledModal category="profile" isOpen={isProfileOpen}>
			<Grid checkUpload={isUploadOpen}>
				<Image category={"rectangle"} />
				<ProfileContents>
					<div> 프로필 </div>
					<div> 댓글 창 </div>
					<div> 댓글 입력 창</div>
				</ProfileContents>
			</Grid>
		</StyledModal>
	);
};

export default Modal;

const Grid = styled.div<{ checkUpload: boolean }>`
	display: grid;
	grid-template-columns: 5fr 4fr;

	${(props) =>
		props.checkUpload &&
		css`
			display: flex;
		`}
`;

const ProfileContents = styled.div`
	display: flex;
	flex-direction: column;
`;
