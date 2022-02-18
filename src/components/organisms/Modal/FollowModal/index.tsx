import FollowInfo from "components/molecules/Modal/FollowInfo";
import { modalCloseHandler } from "lib/Handler";
import {
	requestFollowerInfo,
	requestFollowingInfo,
	requestSubscribeInfo,
} from "lib/request/profile";
import { followerInfoType } from "lib/request/type";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { closeModal } from "reducers/modalReducer";
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
	const isOpen = useSelector(
		(state: RootState) => state.followModalReducer.isOpen,
	);
	const category = useSelector(
		(state: RootState) => state.followModalReducer.category,
	);
	const userId = useSelector(
		(state: RootState) => state.followModalReducer.userId,
	);
	const [datas, setDatas] = useState<Array<followerInfoType>>([]);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log("category", category);
	}, [category]);

	useEffect(() => {
		if (isOpen) {
			if (category === "follower") {
				requestFollowerInfo(userId)
					.then((res: Array<followerInfoType>) => {
						const newData = res;
						setDatas(newData);
					})
					.catch((err) => {
						return;
					});
			} else if (category === "following") {
				requestFollowingInfo(userId)
					.then((res: Array<followerInfoType>) => {
						const newData = res;
						setDatas(newData);
					})
					.catch((err) => {
						return;
					});
			} else {
				requestSubscribeInfo()
					.then((res: Array<followerInfoType>) => {
						const newData = res;
						setDatas(newData);
					})
					.catch((err) => {
						return;
					});
			}
		}
	}, [isOpen]);

	return (
		<ReactModal
			onAfterOpen={() => (document.body.style.overflow = "hidden")}
			onAfterClose={() => (document.body.style.overflow = "unset")}
			style={uploadStyle}
			isOpen={isOpen}
			onRequestClose={() => modalCloseHandler(dispatch)}
		>
			<Title>
				{category === "follower" && <h2>팔로워</h2>}
				{category === "following" && <h2>팔로잉</h2>}
				{category === "kkanbu" && <h2>깐부</h2>}
			</Title>
			<Grid>
				{datas.length > 0 ? (
					datas.map((person) => (
						<FollowInfo
							onClick={() => dispatch(closeModal())}
							accountName={person.account_name}
							nickName={person.nickname}
						/>
					))
				) : (
					<>
						{category === "follower" && <h2>팔로워가 없습니다</h2>}
						{category === "following" && <h2>팔로잉이 없습니다</h2>}
						{category === "kkanbu" && <h2>깐부가 없습니다</h2>}
					</>
				)}
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
