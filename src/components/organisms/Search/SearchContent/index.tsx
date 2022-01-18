import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import mok from "static/imgs/mok2.jpg";
import Image from "components/atoms/Image";

const SearchContent: FunctionComponent = () => {
	const [popular, setPopular] = useState([
		mok,
		mok,
		mok,
		mok,
		mok,
		mok,
		mok,
		mok,
		mok,
	]);
	const [thumbnails, setThumbnails] = useState([mok, mok, mok, mok, mok, mok]);
	return (
		<Wrapper>
			<TitleDiv>
				<Title>인기 게시물</Title>
			</TitleDiv>
			<Grid>
				{popular.map((value, index) => {
					return <Image category="square" src={mok} width="293px" />;
				})}
			</Grid>
			<TitleDiv>
				<Title>최근 게시물</Title>
			</TitleDiv>
			<Grid>
				{thumbnails.map((value, index) => {
					return <Image category="square" src={mok} width="293px" />;
				})}
			</Grid>
		</Wrapper>
	);
};

export default SearchContent;

const Wrapper = styled.div``;

const TitleDiv = styled.div`
	display: flex;
	justify-content: left;
`;

const Title = styled.h2`
	color: #8e8e8e;
	font-size: 14px;
	margin-bottom: 20px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 28px;
	row-gap: 28px;
	margin-bottom: 50px;
`;
