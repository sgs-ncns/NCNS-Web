import React from "react";
import styled, { css } from "styled-components";
import Image from "components/atoms/Image";
import { Hashtag } from "components/atoms/Icon/svg";

interface searchListProps {
	category: "hashtag" | "user";
	title: string;
	content: number | string;
	isSelected?: boolean;
}

const SearchList = (props: searchListProps) => {
	const { category, title, content, isSelected = false } = props;
	return (
		<Grid isSelected={isSelected}>
			<ImageContainer>
				{category === "hashtag" ? (
					<Image category={"circle"} src={Hashtag} width={"44px"} />
				) : (
					<Image category={"circle"} width={"44px"} />
				)}
			</ImageContainer>
			<ContentsGrid>
				<Content>
					<strong>
						{category === "hashtag" && "#"}
						{title}
					</strong>
				</Content>
				<Content>
					{category === "hashtag" ? `게시물 ${content}개` : `${content}`}
				</Content>
			</ContentsGrid>
		</Grid>
	);
};

export default SearchList;

const Grid = styled.div<{ isSelected: boolean }>`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	height: 60px;
	padding: 8px 16px;
	${(props) =>
		props.isSelected &&
		css`
			background: #dbdbdb;
		`}
	&:hover {
		background: #dbdbdb;
	}
`;
const ContentsGrid = styled.div`
	display: flex;
	width: 80%;
	flex-direction: column;
`;

const ImageContainer = styled.div`
	display: flex;
	width: 20%;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
`;
