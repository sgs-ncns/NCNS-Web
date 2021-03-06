import Count from "components/atoms/Count";
import Image from "components/atoms/Image";
import RequestButton from "components/atoms/RequestButton";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface SearchHeaderProps {
	postCount: number;
}

const SearchHeader = (props: SearchHeaderProps) => {
	const { postCount } = props;
	const { tagName } = useParams();
	const [valid, setValid] = useState(true);
	const follow = (): void => {
		console.log("send follow info to server");
		setValid(!valid);
	};
	return (
		<StyledHeader>
			<div>
				<Image category="circle" width="150px" />
			</div>
			<StyledDiv>
				<StyledContent>
					<StyledTitle>#{tagName}</StyledTitle>
					<Count title={"게시물"} number={postCount} />
					<RequestButton
						type={"button"}
						primary={false}
						height="30px"
						onClick={follow}
						valid={valid}
					>
						{valid ? "팔로우" : "팔로우 취소"}
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
	margin-top: 30px;
	margin-bottom: 44px;
`;

const StyledDiv = styled.div`
	display: flex;
	width: 100%;
	text-align: left;
	width: 100%;
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 50px;
`;

export const StyledTitle = styled.h1`
	font-size: 28px;
	line-height: 32px;
	margin: -5px 0 -6px;
	font-weight: 300;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	display: block;
`;

export const StyledSpan = styled.span`
	margin-top: 10px;
	margin-bottom: 20px;
`;

export const StyledNumber = styled.span`
	margin-left: 10px;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	font-weight: 600;
`;
