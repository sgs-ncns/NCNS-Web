import ToolBox from "components/molecules/ToolBox";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "static/imgs/logo.png";

// 네비게이션 바입니다.

const NavBar: FunctionComponent = () => {
	const [clicked, setClicked] = useState(false);
	const [value, setValue] = useState("");
	const navigate = useNavigate();

	const textHandler = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setValue(e.target.value);
	};

	const onKeyPress = (e: { key: string }) => {
		if (e.key === "Enter") {
			navigate(`/explore/tags/${value}`);
		}
	};

	// TODO : requestSearchData(value) 통신 파트로 옮겨놓기
	const requestSearchData = (value: string) => {
		//라우팅 걸기
		alert(`value ${value}`);
	};

	return (
		<StyledWrapper>
			<Grid>
				<FirstItem>
					<img src={logo} />
				</FirstItem>
				<SecondItem>
					<StyledInput
						type="text"
						onChange={textHandler}
						placeholder="검색"
						value={value}
						onKeyPress={onKeyPress}
					/>
				</SecondItem>
				<ThirdItem>
					<ToolBox />
				</ThirdItem>
			</Grid>
		</StyledWrapper>
	);
};

export default NavBar;

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
	background: #efefef;
	height: 36px;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 100%;
	border: 1px solid #ced4da;
	border-radius: 2px;
	font-size: 16px;
	background-color: #f8f9fa;
`;

const ThirdItem = styled.div`
	display: flex;
	justify-content: right;
`;
