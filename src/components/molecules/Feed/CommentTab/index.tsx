import RequestButton from "components/atoms/RequestButton";
import { REQUEST_BUTTON_TYPE } from "common/types";
import { handleButtonType } from "lib/utils";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CommentTab = () => {
	const [input, setInput] = useState<string>("");
	//댓글 달기 기능
	const [active, setActive] = useState(false);
	const myId = "myId";

	useEffect(() => {
		// input값 들어오면 버튼 활성화
		input.length != 0 ? setActive(true) : setActive(false);
	}, [input]);

	const onChange = (event: any) => {
		setInput(event.target.value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleButtonType(REQUEST_BUTTON_TYPE.Comment, input);
		setInput("");
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
				<StyledArea placeholder="댓글 달기..." onChange={onChange} />
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
