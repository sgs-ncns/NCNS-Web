import ToolBox from "components/molecules/ToolBox";
import React, {
	FormEvent,
	FunctionComponent,
	useEffect,
	useRef,
	useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "components/atoms/Image";
import Logo from "static/imgs/logo.png";
import SearchPreview from "../Search/SearchPreview";
import useOutsideClick from "hooks/useOutsideClick";
import {
	getSearchData,
	globalSearchType,
	hashtagSearchType,
	userSearchType,
} from "lib/request/search";

// 네비게이션 바입니다.

const NavBar: FunctionComponent = () => {
	const [value, setValue] = useState<string>("");
	const [searchData, setSearchData] = useState<Array<globalSearchType>>();
	const [isSearching, setSearching] = useState<boolean>(false);
	const ref = useRef(null);
	const navigate = useNavigate();

	useOutsideClick(ref, () => {
		setSearching(false);
	});

	useEffect(() => {
		getSearchData(value)
			.then((res: Array<globalSearchType>) => {
				if (res) setSearchData(res);
			})
			.catch((err) => {
				console.log(err);
				return;
			});
	}, [value]);

	const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
					<Link to="/">
						<Image src={Logo} category={"rectangle"} height={"100%"} />
					</Link>
				</FirstItem>
				<SecondItem onClick={() => setSearching(true)} ref={ref}>
					<StyledInput
						type="text"
						onChange={textHandler}
						placeholder="검색"
						value={value}
						onKeyPress={onKeyPress}
					/>
					{isSearching && <SearchPreview searchData={searchData} />}
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
	height: 70%;
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
