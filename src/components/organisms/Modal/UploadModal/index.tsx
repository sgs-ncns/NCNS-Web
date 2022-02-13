import React from "react";
import ImgUploadBox from "components/molecules/ImgUploadBox";
import { modalCloseHandler } from "lib/Handler";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import styled from "styled-components";

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
	const isUploadOpen = useSelector(
		(state: RootState) => state.modalReducer.isUploadOpen,
	);
	const dispatch = useDispatch();

	return (
		<ReactModal
			onAfterOpen={() => (document.body.style.overflow = "hidden")}
			onAfterClose={() => (document.body.style.overflow = "unset")}
			style={uploadStyle}
			isOpen={isUploadOpen}
			onRequestClose={() => modalCloseHandler(dispatch)}
		>
			<Grid>
				<ImgUploadBox />
			</Grid>
		</ReactModal>
	);
};

export default UploadModal;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
`;
