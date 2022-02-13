import { modalCloseHandler } from "lib/Handler";
import React from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import styled from "styled-components";
import FeedHeader from "components/molecules/Feed/FeedHeader";
import FeedTool from "components/molecules/Feed/FeedTool";
import CommentTab from "components/molecules/Feed/CommentTab";
import Comment from "components/molecules/Comment";
import Image from "components/atoms/Image";

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

interface FeedModalProps {
	id?: string;
	comments?: Array<object>; //타입 상세하게 해서 common/types에 지정해주기
}

const FeedModal = (props: FeedModalProps) => {
	const { id = "95.seong" } = props;
	const dispatch = useDispatch();
	const isProfileOpen = useSelector(
		(state: RootState) => state.modalReducer.isProfileOpen,
	);

	return (
		<ReactModal
			onAfterOpen={() => (document.body.style.overflow = "hidden")}
			onAfterClose={() => (document.body.style.overflow = "unset")}
			style={profileStyle}
			isOpen={isProfileOpen}
			onRequestClose={() => modalCloseHandler(dispatch)}
		>
			<Grid>
				<ImageBox>
					<Image category="rectangle" />
				</ImageBox>
				<ProfileContents>
					<FeedHeader />
					<StyledUl>
						{/* 통신 되면 리스트 맵함수로 변경하기 */}
						<StyledLi>
							<Comment />
						</StyledLi>
						<StyledLi>
							<Comment />
						</StyledLi>
					</StyledUl>
					<FeedTool id={id} />
					<CommentTab />
				</ProfileContents>
			</Grid>
		</ReactModal>
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
	display: grid;
	width: 40%;
	grid-template-rows: 0.5fr 5fr 0.5fr 0.5fr;
	height: auto;
`;

const StyledUl = styled.ul`
	padding: 16px;
	margin: 0;
	border-top: 1px solid #dbdbdb;
	border-bottom: 1px solid #dbdbdb;
`;

const StyledLi = styled.li`
	list-style: none;
	padding-left: 0;
	padding-top: 12px;
`;
