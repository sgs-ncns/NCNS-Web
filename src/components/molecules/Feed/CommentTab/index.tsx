import RequestButton from "components/atoms/RequestButton";
import { REQUEST_BUTTON_TYPE } from "common/types";
import { checkResponseCode, handleButtonType } from "lib/utils";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sendComment } from "lib/request/post";
import { CommentType } from "components/molecules/Comment";
import Comment from "components/molecules/Comment";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import { sendCommentNotify } from "lib/request/notify";

// 피드의 댓글을 달 수 있는 부분입니다.
interface CommentTabProps {
	targetName: string;
	postId: number;
	children?: React.ReactNode;
	commentList?: Array<CommentType>;
	isLiked: boolean;
	activeList: boolean;
	postContent?: string;
}

export type commentsType = {
	accountName: string;
	content: string;
};

const CommentTab = (props: CommentTabProps) => {
	const { postId, children, commentList, targetName, activeList, postContent } =
		props;
	const [content, setContent] = useState<string>("");
	const [active, setActive] = useState<boolean>(false);
	const [comments, setComments] = useState<Array<commentsType>>([]);
	const myId = useSelector((state: RootState) => state.userReducer.accountName);

	useEffect(() => {
		if (commentList) {
			const commentArray: Array<commentsType> = [];
			commentList.forEach((commentInfo) =>
				commentArray.push({
					accountName: commentInfo.account_name,
					content: commentInfo.content,
				}),
			);
			setComments(commentArray);
		}
		return () => setComments([]);
	}, [commentList]);

	// useEffect의 의존성배열에 content 상태값을 체크하여
	// textArea의 길이가 0이 아니면 게시 버튼 활성화를 시킵니다.
	useEffect(() => {
		// input값 들어오면 버튼 활성화
		content.length != 0 && postId ? setActive(true) : setActive(false);
	}, [content]);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		sendComment(myId, content, postId)
			.then((res: string) => {
				if (checkResponseCode(res) === "00") {
					alert("댓글 등록이 완료 되었습니다.");
					setContent("");
					setComments([...comments, { accountName: myId, content: content }]);
					if (targetName !== myId) {
						sendCommentNotify(targetName, postId, myId)
							.then((res) => {
								return;
							})
							.catch((err) => {
								console.log(err);
								return;
							});
					}
				} else throw new Error(res);
			})
			.catch((err) => {
				console.log(err);
				return;
			});
	};

	return (
		<Grid>
			{activeList && (
				<>
					<StyledUl>
						{/* TODO : 통신 되면 리스트 맵함수로 변경하기 */}
						<Comment accountName={targetName} content={postContent} />
						{comments &&
							comments.map((comment: commentsType) => (
								<StyledLi>
									<Comment
										accountName={comment.accountName}
										content={comment.content}
									/>
								</StyledLi>
							))}
					</StyledUl>
					{children}
				</>
			)}
			<StyledCommentTab>
				<StyledForm onSubmit={onSubmit}>
					<StyledArea
						placeholder="댓글 달기..."
						onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
							setContent(event.target.value)
						}
						value={content}
					/>
					<RequestButton type="submit" primary={true} active={active}>
						게시
					</RequestButton>
				</StyledForm>
			</StyledCommentTab>
		</Grid>
	);
};

export default CommentTab;

const Grid = styled.div`
	display: grid;
	height: 93%;
	grid-template-rows: 8fr 1fr 1fr;
`;

const StyledCommentTab = styled.section`
	display: flex;
	align-items: center;
	border-top: 1px solid #dbdbdb;
	color: rgba(var(--f52, 142, 142, 142), 1);
	flex-shrink: 0;
	font-size: 14px;
	justify-content: center;
	line-height: 18px;
	padding: 6px 16px;
	margin-top: 20px;
	height: 40px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	flex-shrink: 1;
	position: relative;
`;

const StyledArea = styled.textarea`
	background: 0 0;
	border: none;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	display: flex;
	flex-grow: 1;
	height: 18px;
	max-height: 80px;
	outline: 0;
	padding: 0;
	resize: none;
	width: 0;
`;

const StyledUl = styled.ul`
	padding: 16px;
	margin: 0;
	border-top: 1px solid #dbdbdb;
	border-bottom: 1px solid #dbdbdb;
	overflow: auto;
`;

const StyledLi = styled.li`
	list-style: none;
	padding-left: 0;
	padding-top: 12px;
`;
