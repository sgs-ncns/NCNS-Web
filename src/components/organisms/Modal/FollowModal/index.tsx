import FollowInfo from "components/molecules/Modal/FollowInfo";
import { modalCloseHandler } from "lib/Handler";
import React, { useEffect } from "react";
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
		display: "block",
	},
};

const FollowModal = () => {
	const isFollowOpen = useSelector(
		(state: RootState) => state.modalReducer.isFollowOpen,
	);
	const dispatch = useDispatch();

	// useEffect(() => {}, []);

	return (
		<ReactModal
			onAfterOpen={() => (document.body.style.overflow = "hidden")}
			onAfterClose={() => (document.body.style.overflow = "unset")}
			style={uploadStyle}
			isOpen={isFollowOpen}
			onRequestClose={() => modalCloseHandler(dispatch)}
		>
			<Title>
				<h2>팔로워</h2>
			</Title>
			<Grid>
				<FollowInfo accountName={"myId"} />
				<FollowInfo accountName={"myId"} />
				<FollowInfo accountName={"myId"} />
				<FollowInfo accountName={"myId"} />
				<FollowInfo accountName={"myId"} />
				<FollowInfo accountName={"myId"} />
				<FollowInfo accountName={"myId"} />
				<FollowInfo accountName={"myId"} />
			</Grid>
		</ReactModal>
	);
};

export default FollowModal;

const Grid = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	overflow: auto;
	overflow-x: hidden;
	margin: 0 auto;
	border: 1px solid gray;
`;

const Title = styled.div`
	position: sticky;
	top: 0;
	background-color: white;
	display: flex;
	width: 100%;
	justify-content: center;
	border-bottom: 1px solid gray;
	padding: 0 0;
	margin-bottom: 10px;
`;
