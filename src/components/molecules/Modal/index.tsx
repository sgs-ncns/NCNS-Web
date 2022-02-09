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
import ImgUploadBox from "../ImgUploadBox";

interface ProfileModalProps {
	id?: string;
}

const Modal = (props: ProfileModalProps) => {
	const { id = "95.seong" } = props;
	const isUploadOpen = useSelector(
		(state: RootState) => state.modalReducer.isUploadOpen,
	);
	const isProfileOpen = useSelector(
		(state: RootState) => state.modalReducer.isProfileOpen,
	);

	return isUploadOpen && !isProfileOpen ? (
		<StyledModal category="upload" isOpen={isUploadOpen}>
			<Grid>
				<ImgUploadBox />
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
					<FeedTool id={id} />
					<CommentTab />
				</ProfileContents>
			</Grid>
		</StyledModal>
	);
};

export default Modal;

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
