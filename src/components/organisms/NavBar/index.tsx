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
import { getSearchData, globalSearchType } from "lib/request/search";
import { useDispatch } from "react-redux";
import { saveList } from "reducers/searchReducer";

// 네비게이션 바입니다.

const NavBar: FunctionComponent = () => {
	const [value, setValue] = useState<string>("");
	const [tempSearch, setTempSearch] = useState<string>("");
	const [searchData, setSearchData] = useState<Array<globalSearchType>>();
	const [isSearching, setSearching] = useState<boolean>(false);
	const [isSelected, setSelected] = useState<boolean>(false);
	const ref = useRef(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useOutsideClick(ref, () => {
		setSearching(false);
	});

	useEffect(() => {
		if (value) {
			getSearchData(value)
				.then((res: Array<globalSearchType>) => {
					if (res) setSearchData(res);
				})
				.catch((err) => {
					console.log(err);
					return;
				});
		}
	}, [value]);

	const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			if (searchData.at(0).hashtag) {
				if (searchData.at(0).hashtag.content === value) {
					dispatch(saveList(searchData.at(0).hashtag.post_id_list));
					navigate(`/explore/tags/${value}`);
				} else {
					setSelected(true);
					setValue(searchData.at(0).hashtag.content);
				}
				// console.log(searchData.at(0).hashtag.content);
			} else if (searchData.at(0).user) {
				if (searchData.at(0).user.account_name === value) navigate(`${value}`);
				else if (searchData.at(0).user.nickname === value) navigate(`${value}`);
				else {
					setSelected(true);
					setValue(searchData.at(0).user.account_name);
				}
			}
		}
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
					{isSearching && (
						<SearchPreview searchData={searchData} isSelected={isSelected} />
					)}
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
