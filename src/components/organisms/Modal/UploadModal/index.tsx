import React from "react";
import ImgUploadBox from "components/molecules/ImgUploadBox";
import { modalCloseHandler } from "lib/Handler";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import styled from "styled-components";

// 사진 업로드 시 뜨는 모달입니다.
// 게시물 업로드 흐름은 홈 화면에 뜨는 부분과 동일합니다.

const uploadStyle = {
	overlay: {
		zIndex: 10,
		backgroundColor: "rgba(0, 0, 0, 0.85)",
	},
	content: {
		margin: "auto auto",
		width: "500px",
		height: "500px",
		borderRadius: "15px",
		opacity: "initial",
		padding: "0 0",
	},
};

const UploadModal = () => {
	const isOpen = useSelector((state: RootState) => state.modalReducer.isOpen);
	const category = useSelector(
		(state: RootState) => state.modalReducer.category,
	);
	const dispatch = useDispatch();

	return (
		category === "upload" && (
			<ReactModal
				onAfterOpen={() => (document.body.style.overflow = "hidden")}
				onAfterClose={() => (document.body.style.overflow = "unset")}
				style={uploadStyle}
				isOpen={isOpen}
				onRequestClose={() => modalCloseHandler(dispatch)}
			>
				<Grid>
					<ImgUploadBox />
				</Grid>
			</ReactModal>
		)
	);
};

export default UploadModal;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
`;
