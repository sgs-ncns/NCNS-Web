import LinkedId from "components/atoms/LinkedId";
import ProfileImg from "components/atoms/ProfileImg";
import RequestButton from "components/atoms/RequestButton";
import hashtagHandler from "lib/hashtagHandler";
import { REQUEST_BUTTON_TYPE } from "lib/types";
import { handleButtonType } from "lib/utils";
import React, { FunctionComponent, useEffect, useState } from "react";
import { modifyPageWidth } from "reducers/pageWidthReducer";
import styled from "styled-components";
import { setConstantValue } from "typescript";

const FeedFooter: FunctionComponent = () => {
	const mokData = {
		username: "95.Seong",
		content: "#협찬 #소통 NCNS 화이팅^^",
	};
	const [comment, setComment] = useState<{
		count: number;
		contents: Array<any>;
	}>({
		count: 3,
		contents: [
			{
				username: "94.seong",
				content: "#협찬 #소통 NCNS 화이팅^^",
			},
			{
				username: "93.seong",
				content: "#협찬 #소통 NCNS 화이팅^^",
			},
			{
				username: "92.seong",
				content: "#협찬 #소통 NCNS 화이팅^^",
			},
		],
	});
	//더 보기 버튼
	const [moreContent, setMoreContent] = useState(false);

	//댓글 해시태그와 일반 텍스트 나누기
	const splitText = mokData.content.split(" ");
	const handledText = hashtagHandler(splitText);
	const 압축 = hashtagHandler(splitText[0]);

	//댓글 달기 기능
	const [active, setActive] = useState(false);
	const myId = "myId";
	const [input, setInput] = useState<string>("");

	const onChange = (event: any) => {
		setInput(event.target.value);
	};

	useEffect(() => {
		// input값 들어오면 버튼 활성화
		input.length != 0 ? setActive(true) : setActive(false);
	}, [input]);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleButtonType(REQUEST_BUTTON_TYPE.Comment, input);
		const diffContents = comment.contents;
		diffContents.push({ username: myId, content: input });

		setComment({
			...comment,
			count: comment.count + 1,
			contents: diffContents,
		});
		setInput(""); //안먹음 이유 모르겠음...
	};

	return (
		<StyledDiv>
			<LikedInfo>
				<ProfileImg size="small" />
				<Body>
					<LinkedId underline={false}>아무나</LinkedId>님 외 여러 명이
					좋아합니다.
				</Body>
			</LikedInfo>
			<Contents>
				<LinkedId underline={true}>MyId</LinkedId>{" "}
				<StyledSpan>{moreContent ? handledText : 압축}</StyledSpan>
				<StyledSpan>{!moreContent && "..."}</StyledSpan>
				{!moreContent && (
					<MoreButton onClick={() => setMoreContent(!moreContent)}>
						더 보기
					</MoreButton>
				)}
			</Contents>
			<Comments>
				<MoreButton onClick={() => console.log(input)}>댓글 더 보기</MoreButton>
			</Comments>
			<StyledCommentTab>
				<StyledForm onSubmit={onSubmit}>
					<StyledArea placeholder="댓글 달기..." onChange={onChange} />
					<RequestButton type="submit" primary={true} active={active}>
						게시
					</RequestButton>
				</StyledForm>
			</StyledCommentTab>
		</StyledDiv>
	);
};

export default FeedFooter;

const StyledDiv = styled.div`
	min-width: 335px;
	width: 100%;
	display: block;
	background: #ffffff;
`;

const LikedInfo = styled.section`
	display: flex;
	padding: 0px 16px;
	width: 100%;
`;

const Body = styled.div`
	padding-left: 5px;
`;

const Contents = styled.div`
	margin-top: 7px;
	display: flex;
	padding: 0px 16px;
`;

const StyledSpan = styled.span`
	margin-left: 5px;
`;

const MoreButton = styled.button`
	background: 0 0;
	border: 0;
	cursor: pointer;
	line-height: inherit;
	margin-left: 10px;
	padding: 0;
	color: rgba(var(--f52, 142, 142, 142), 1);
`;

const Comments = styled.div`
	margin-top: 7px;
	display: flex;
	padding: 7px 0 0 10px;
`;

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
