import React, { FunctionComponent } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
	closeModal,
	CLOSE_PROFILE_MODAL,
	CLOSE_UPLOAD_MODAL,
} from "reducers/modalReducer";

// react-modal 라이브러리를 사용하여 구현한 모달 창으로 redux와 함께 움직입니다.
// 모달 컴포넌트의 위치는 index.tsx에 존재합니다.
// modalReducer에 전역 상태 값이 존재합니다.

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

const profileStyle = {
	overlay: {
		zIndex: 10,
		backgroundColor: "rgba(var(--jb7,0,0,0),.5)",
	},
	content: {
		margin: "auto auto",
		width: "60%",
		height: "80%",
		padding: "0 0",
	},
};

interface ModalProps {
	category?: "upload" | "profile";
	children?: React.ReactNode;
	isOpen: boolean;
}

const Modal: FunctionComponent<ModalProps> = (props) => {
	const { category, children, isOpen } = props;
	const dispatch = useDispatch();

	//전체 모달 끄는 것으로 변경하기
	const requestClose = () => {
		category === "upload"
			? dispatch(closeModal(CLOSE_UPLOAD_MODAL))
			: dispatch(closeModal(CLOSE_PROFILE_MODAL));
	};

	return (
		<ReactModal
			onAfterOpen={() => (document.body.style.overflow = "hidden")}
			onAfterClose={() => (document.body.style.overflow = "unset")}
			style={category === "upload" ? uploadStyle : profileStyle}
			isOpen={isOpen}
			onRequestClose={requestClose}
		>
			{children}
		</ReactModal>
	);
};
export default Modal;
