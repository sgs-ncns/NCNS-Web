import { modalCloseHandler } from "lib/Handler";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import styled from "styled-components";
import FeedHeader from "components/molecules/Feed/FeedHeader";
import FeedTool from "components/molecules/Feed/FeedTool";
import CommentTab from "components/molecules/Feed/CommentTab";
import Image from "components/atoms/Image";
import { postDetailResponseType, requestPostDetails } from "lib/request/post";
import { requestImages } from "utils/amplify";
import { S3ProviderListOutput } from "@aws-amplify/storage";
import FeedBody from "components/molecules/Feed/FeedBody";
import { DataStore } from "aws-amplify";

// 피드에 댓글 설정을 누르면 뜨게 되는 모달입니다.
// 모달을 들어가면 댓글 통신이 일어나게 되고, 그 값으로 S3에서 정보를 받아와
// 사진과 댓글들이 뜨게 됩니다.

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

const FeedModal = () => {
	const [datas, setDatas] = useState<postDetailResponseType>();
	const dispatch = useDispatch();
	const isOpen = useSelector((state: RootState) => state.modalReducer.isOpen);
	const category = useSelector(
		(state: RootState) => state.modalReducer.category,
	);
	const myId = useSelector((state: RootState) => state.userReducer.userId);
	const postId = useSelector((state: RootState) => state.modalReducer.postId);

	useEffect(() => {
		if (postId) {
			const getDetailPageData = async () => {
				try {
					const res = await requestPostDetails(postId);
					setDatas({ ...res });
					return res;
				} catch (err) {
					console.log(err);
					return;
				}
			};
			getDetailPageData()
				.then((res) => console.log(res))
				.catch((err) => {
					console.log(err);
					return;
				});
		}
	}, [postId]);

	return (
		category === "feed" && (
			<ReactModal
				onAfterOpen={() => (document.body.style.overflow = "hidden")}
				onAfterClose={() => {
					document.body.style.overflow = "unset";
					setDatas(null);
				}}
				style={profileStyle}
				isOpen={isOpen}
				onRequestClose={() => modalCloseHandler(dispatch)}
			>
				{datas && (
					<Grid>
						<ImageBox>
							<FeedBody userId={datas.user_id} imagePath={datas.image_path} />
						</ImageBox>
						<ProfileContents>
							<FeedHeader id={datas.account_name} />
							<CommentTab
								parentId={myId}
								postId={datas.post_id}
								commentList={datas.comment_list}
							>
								<FeedTool
									accountName={datas.account_name}
									postId={datas.post_id}
									likeCount={datas.like_count}
									isLiked={datas.liking}
								/>
							</CommentTab>
						</ProfileContents>
					</Grid>
				)}
			</ReactModal>
		)
	);
};

export default FeedModal;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
`;

const ImageBox = styled.div`
	display: flex;
	justify-content: center;
	background: black;
	width: 60%;
	height: auto;
`;

const ProfileContents = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	height: 100%;
`;
