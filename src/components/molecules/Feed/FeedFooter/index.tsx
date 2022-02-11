import LinkedId from "components/atoms/LinkedId";
import ProfileImg from "components/atoms/ProfileImg";
import hashtagHandler from "lib/hashtagHandler";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModal, OPEN_PROFILE_MODAL } from "reducers/modalReducer";
import styled from "styled-components";

// 하트와 댓글과 같은 피드 기능들 밑의 게시물의 컨텐츠(글)과
// 해시태그 내용 또는 사람 태그 내용을 보여주는 부분입니다.
// 더보기 버튼을 통해 조건부 렌더링을 사용하여 전체 컨텐츠와 압축된 컨텐츠를 보여줍니다.

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
	const shortenText = hashtagHandler(splitText[0]);

	const dispatch = useDispatch();
	return (
		<StyledDiv>
			<LikedInfo>
				<ProfileImg size="small" />
				<Body>
					<LinkedId underline={false}>someone</LinkedId>님 외 여러 명이
					좋아합니다.
				</Body>
			</LikedInfo>
			<Contents>
				<LinkedId underline={true}>MyId</LinkedId>{" "}
				<StyledSpan>{moreContent ? handledText : shortenText}</StyledSpan>
				<StyledSpan>{!moreContent && "..."}</StyledSpan>
				{!moreContent && (
					<MoreButton onClick={() => setMoreContent(!moreContent)}>
						더 보기
					</MoreButton>
				)}
			</Contents>
			<Comments>
				<MoreButton onClick={() => dispatch(openModal(OPEN_PROFILE_MODAL))}>
					댓글 더 보기
				</MoreButton>
			</Comments>
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
