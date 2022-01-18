import Image from "components/atoms/Image";
import RequestButton from "components/atoms/RequestButton";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SearchHeader = () => {
	const { tagName } = useParams();
	return (
		<StyledHeader>
			<Image category={"circle"} width="152px" />
			<StyledDiv>
				<StyledContent>
					<StyledTitle>#{tagName}</StyledTitle>
					<StyledSpan>
						게시물
						<StyledNumber>43,701</StyledNumber>
						{/* 개수 받아와서 수정하기 */}
					</StyledSpan>
					<RequestButton type={"button"} primary={false}>
						팔로우
					</RequestButton>
				</StyledContent>
			</StyledDiv>
		</StyledHeader>
	);
};

export default SearchHeader;

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	flex-direction: row;
	font-size: 16px;
	line-height: 24px;
	max-width: 935px;
	width: calc(100% - 40px);
	margin-left: 20%;
	margin-top: 30px;
	margin-bottom: 44px;
`;

const StyledDiv = styled.div`
	display: flex;
	max-width: 935px;
	text-align: left;
	margin-left: 50px;
	width: 100%;
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

const StyledTitle = styled.h1`
	font-size: 28px;
	line-height: 32px;
	margin: -5px 0 -6px;
	font-weight: 300;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	display: block;
`;

const StyledSpan = styled.span`
	margin-top: 10px;
	margin-bottom: 20px;
`;

const StyledNumber = styled.span`
	margin-left: 10px;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	font-weight: 600;
`;
