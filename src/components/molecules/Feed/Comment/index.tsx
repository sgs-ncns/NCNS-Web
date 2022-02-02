import RequestButton from "components/atoms/RequestButton";
import { REQUEST_BUTTON_TYPE } from "lib/types";
import { handleButtonType } from "lib/utils";
import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

const CommentTab: FunctionComponent = () => {
	const [active, setActive] = useState(false);
	const [comment, setComment] = useState("");
	const onChange = (event: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setComment(event.target.value);
		console.log(comment);
	};

	useEffect(() => {
		console.log(comment.length);
		comment.length != 0 ? setActive(true) : setActive(false);
	}, [comment]);

	return (
		<StyledCommentTab>
			<StyledForm
				onSubmit={() => handleButtonType(REQUEST_BUTTON_TYPE.Comment, comment)}
			>
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
	border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
	color: rgba(var(--f52, 142, 142, 142), 1);
	flex-shrink: 0;
	font-size: 14px;
	justify-content: center;
	line-height: 18px;
	padding: 6px 16px;
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
