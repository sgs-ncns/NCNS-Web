import React from "react";
import StyledModal from "components/atoms/Modal";
import styled, { css } from "styled-components";
import Image from "components/atoms/Image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import CommentTab from "../Feed/CommentTab";
import FeedTool from "../Feed/FeedTool";
import FeedHeader from "../Feed/FeedHeader";
import Comment from "../Comment";
import { Divider } from "common/styles";

const Modal = () => {
	const isUploadOpen = useSelector(
		(state: RootState) => state.modalReducer.isUploadOpen,
	);
	const isProfileOpen = useSelector(
		(state: RootState) => state.modalReducer.isProfileOpen,
	);

	return isUploadOpen && !isProfileOpen ? (
		<StyledModal category="upload" isOpen={isUploadOpen}>
			<Grid>
				<div>이미지 업로드 박스</div>
			</Grid>
		</StyledModal>
	) : (
		<StyledModal category="profile" isOpen={isProfileOpen}>
			<Grid>
				<ImageBox>
					<Image category="rectangle" />
				</ImageBox>
				<ProfileContents>
					<FeedHeader />
					<StyledUl>
						<StyledLi>
							<Comment />
						</StyledLi>
						<StyledLi>
							<Comment />
						</StyledLi>
					</StyledUl>
					{/* <div style={{ border: "1px solid black" }}> 댓글 창 </div> */}
					<FeedTool />
					<CommentTab />
				</ProfileContents>
			</Grid>
		</StyledModal>
	);
};

export default Modal;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 6fr 4fr;
	height: 100%;
`;

const ProfileContents = styled.div`
	display: grid;
	width: 100%;
	grid-template-rows: 0.5fr 5fr 0.5fr 0.5fr;
`;

const ImageBox = styled.div`
	display: flex;
	justify-content: center;
	background: black;
	height: 100%;
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
