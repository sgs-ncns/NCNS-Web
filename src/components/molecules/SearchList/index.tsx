import React from "react";
import styled from "styled-components";

const SearchList = () => {
	return (
		<Grid>
			<div>#</div>
			<div></div>
			<Content>
				<div>#사바나캣</div>
				<div>게시물 8447</div>
			</Content>
		</Grid>
	);
};

export default SearchList;

const Grid = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	height: 60px;
	padding: 8px 16px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
`;
