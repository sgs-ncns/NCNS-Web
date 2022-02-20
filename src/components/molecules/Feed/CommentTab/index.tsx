import RequestButton from "components/atoms/RequestButton";
import { REQUEST_BUTTON_TYPE } from "common/types";
import { checkResponseCode, handleButtonType } from "lib/utils";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sendComment } from "lib/request/post";

// 피드의 댓글을 달 수 있는 부분입니다.
interface CommentTabProps {
	postId: number;
	parentId: number;
}

const CommentTab = (props: CommentTabProps) => {
	const { postId, parentId } = props;
	const [content, setContent] = useState<string>("");
	const [active, setActive] = useState<boolean>(false);
	const myId = "myId";

	// useEffect의 의존성배열에 content 상태값을 체크하여
	// textArea의 길이가 0이 아니면 게시 버튼 활성화를 시킵니다.
	useEffect(() => {
		// input값 들어오면 버튼 활성화
		content.length != 0 && postId && parentId
			? setActive(true)
			: setActive(false);
	}, [content]);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		sendComment(content, postId)
			.then((res: string) => {
				if (checkResponseCode(res) === "00") {
					alert("댓글 등록이 완료 되었습니다.");
				} else throw Error(res);
			})
			.catch((err) => {
				console.log(err);
				return;
			});
		setContent("");
		// const diffContents = comment.contents;
		// diffContents.push({ username: myId, content: input });

		// setComment({
		// 	...comment,
		// 	count: comment.count + 1,
		// 	contents: diffContents,
		// });
		// setInput(""); //안먹음 이유 모르겠음...
	};

	return (
		<StyledCommentTab>
			<StyledForm onSubmit={onSubmit}>
				<StyledArea
					placeholder="댓글 달기..."
					onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
						setContent(ev.target.value)
					}
				/>
				<RequestButton type="submit" primary={true} active={active}>
					게시
				</RequestButton>
			</StyledForm>
		</StyledCommentTab>
	);
};

export default CommentTab;

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
