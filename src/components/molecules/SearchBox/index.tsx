import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import StyledInput from "components/atoms/Search";

const StyledDiv = styled.div`
	height: 36px;
	border: 1px solid red;
	display: flex;
	align-items: center;
	width: 100%;
`;

const Grid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr 8fr;
	grid-template-rows: 25px;
`;
// repeat(auto-fill, minmax(32px, auto));

const FirstItem = styled.div`
	width: 16px;
	height: 16px;
	font-size: 5px;
`;

const SecondItem = styled.span`
	width: 32px;
	color: #8e8e8e;
`;

type propsType = {
	active?: boolean;
};

const SearchBox: FunctionComponent<propsType> = (props) => {
	const { active } = props;
	return (
		<StyledDiv>
			{!active ? (
				<Grid>
					<FirstItem>1</FirstItem>
					<SecondItem>검색</SecondItem>
				</Grid>
			) : (
				<StyledInput type="text" placeholder="검색" />
			)}
		</StyledDiv>
	);
};

export default SearchBox;
