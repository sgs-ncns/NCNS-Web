import LinkedId from "components/atoms/LinkedId";
import ProfileImg from "components/atoms/ProfileImg";
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

const FeedFooter: FunctionComponent = () => {
	const mokData = {
		username: "95.Seong",
		content: "#협찬 #소통 NCNS 화이팅^^",
	};
	const 압축 = mokData.content.split(" ")[0];

	const [more, setMore] = useState(false);
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
				<StyledSpan>{more ? mokData.content : 압축}</StyledSpan>
				<StyledSpan>{!more && "..."}</StyledSpan>
				{!more && (
					<MoreButton onClick={() => setMore(!more)}>더 보기</MoreButton>
				)}
			</Contents>
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
