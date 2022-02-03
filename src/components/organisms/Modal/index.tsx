import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, CLOSE_UPLOAD_MODAL } from "reducers/modalReducer";
import { RootState } from "reducers";

interface ModalProps {
	isOpen?: boolean;
	onCancel?: () => void;
}

const Modal: FunctionComponent<ModalProps> = (props) => {
	const { onCancel } = props;
	const isOpen = useSelector(
		(state: RootState) => state.modalReducer.isUploadOpen,
	);
	const dispatch = useDispatch();

	const requestClose = () => {
		dispatch(closeModal(CLOSE_UPLOAD_MODAL));
	};

	return (
		<ReactModal
			style={{
				content: {
					margin: "auto auto",
					border: "1px solid blue",
					width: "500px",
					height: "500px",
					zIndex: 10,
				},
			}}
			isOpen={isOpen}
			onRequestClose={requestClose}
		>
			upload 입니다. <button onClick={onCancel}>취소</button>
		</ReactModal>
	);
};
export default Modal;
