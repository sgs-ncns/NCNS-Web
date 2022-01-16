import LinkIcon from "components/atoms/LinkIcon";
import SearchBox from "components/molecules/SearchBox";
import ToolBox from "components/molecules/ToolBox";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

// import useOutsideClick from "components/hooks";
const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	position: sticky;
	border: 1px solid #dbdbdb;
	background: #ffffff;
`;

const Grid = styled.div`
	display: grid;
	width: 935px;
	grid-template-columns: 5fr 4fr 5fr;
	grid-template-rows: 60px;
	padding: 0px 20px;
	align-items: center;
`;

const FirstItem = styled.div`
	display: flex;
	justify-content: left;
`;

const SecondItem = styled.div`
	display: flex;
	justify-content: center;
	border: 1px solid blue;
	background: #efefef;
	height: 36px;
	padding: 0px 16px;

	&:hover {
		cursor: text;
	}
`;

const ThirdItem = styled.div`
	display: flex;
	justify-content: right;
`;

// const useOutsideClick = (ref: any) => {
// 	useEffect(() => {
// 		function handleClickOutside(event: any) {
// 			if (ref.current && !ref.current.contains(event.target)) {
// 				setClicked(false);
// 				console.log("clicked out", clicked);
// 			}
// 		}
// 		document.addEventListener("mousedown", handleClickOutside);

// 		return () => {
// 			document.removeEventListener("mousedown", handleClickOutside);
// 		};
// 	}, [ref]);
// };

const NavBar: FunctionComponent = () => {
	const [clicked, setClicked] = useState(false);
	return (
		<StyledWrapper>
			<Grid>
				<FirstItem>
					<LinkIcon category={"logo"} />
				</FirstItem>
				<SecondItem>
					<SearchBox />
				</SecondItem>
				<ThirdItem>
					<ToolBox />
				</ThirdItem>
			</Grid>
		</StyledWrapper>
	);
};

export default NavBar;
