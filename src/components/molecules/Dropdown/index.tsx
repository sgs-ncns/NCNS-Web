import { Divider } from "common/styles";
import useOutsideClick from "hooks/useOutsideClick";
import { requestNotify } from "lib/request/notify";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { RootState } from "reducers";
import { closeMenu, openMenu } from "reducers/dropReducer";
import { openModal } from "reducers/modalReducer";
import { useAuth } from "router/auth";
import styled, { css } from "styled-components";
import Notify from "../Notify";

// 드롭다운을 구현한 파트입니다. 조건부 렌더링과 Redux 상태 관리 툴을 사용해 구현해보았습니다.
// 통신이 일어나게 되어 전부 나눠서 구현될 예정입니다.

interface DropdownProps {
	category: "notify" | "profile" | "feed";
	showNotify?: boolean;
	showProfile?: boolean;
	showFeed?: boolean;
}

// useRef라는 hook을 통해 dom 객체에 접근을 하며
// useOutsideClick이라는 custom hook으로 닫는 기능을 구현합니다.
// 이 함수는 콜백으로 dispatch로 closeMenu라는 action을 발생시킵니다.
const Dropdown = (props: DropdownProps) => {
	const { category, showNotify, showProfile, showFeed } = props;
	const menu = ["프로필", "저장됨", "계정 전환"];
	const dispatch = useDispatch();
	const myId = useSelector((state: RootState) => state.userReducer.accountName);
	const ref = useRef(null);
	const [datas, setDatas] = useState([]);
	const [isKkanbu, setKkanbu] = useState<boolean>(false);
	const navigate = useNavigate();
	const auth = useAuth();

	switch (category) {
		case "notify":
			{
				//내 아이디는 selector해서
				useEffect(() => {
					requestNotify(myId)
						.then((data) => {
							console.log(data.data);
							setDatas(data.data.reverse());
						})
						.catch((err) => console.log(err));
					return;
				}, [showNotify]);
			}
			break;
	}
	// if (category === "notify") {
	// }

	useOutsideClick(ref, () => {
		dispatch(closeMenu());
	});

	return (
		<DropdownMenu ref={ref} category={category}>
			{category === "feed" && <div>hello</div>}
			{category === "notify" && (
				<HideScroll>
					{!isKkanbu && datas ? (
						datas.map((data, index) => {
							return (
								<Notify
									key={index}
									onClick={() => {
										dispatch(closeMenu());
										dispatch(dispatch(openModal("feed", data.postId)));
									}}
									category={"like"}
								>
									{data.likedName}님이 좋아요를 눌렀습니다.
								</Notify>
							);
						})
					) : (
						<p>알림이 없습니다.</p>
					)}
				</HideScroll>
			)}
			{category === "profile" && (
				<>
					<DropdownItem
						onClick={() => {
							dispatch(closeMenu());
							navigate(`/${myId}`);
						}}
					>
						프로필
					</DropdownItem>
					<DropdownItem>저장됨</DropdownItem>
					<DropdownItem>계정 전환</DropdownItem>
					<Divider />
					<DropdownItem
						onClick={() =>
							auth.signout(() => {
								navigate("/login");
								dispatch(closeMenu());
							})
						}
					>
						로그아웃
					</DropdownItem>
				</>
			)}
		</DropdownMenu>
	);
};

export default Dropdown;

const HideScroll = styled.div``;

const Selector = styled.div`
	display: flex;
	height: 10%;
	width: 100%;
`;
const Item = styled.div`
	width: 50%;
	height: 2rem;
	border: 1px solid #dbdbdb;
	text-align: center;
	vertical-align: middle;
`;
// width: 100%;
// position: absolute;
// border: 1px solid black;

// display: ${(props) => (props.show ? `block` : `none`)};
const DropdownMenu = styled.div<{ category: string }>`
	overflow: auto;
	overflow-x: hidden;
	position: absolute;
	background: white;
	width: 300px;
	border: 2px solid #efefef;
	border-radius: 8px;
	margin-top: 30px;
	margin-right: 15rem;
	font-size: 14px;

	${(props) =>
		props.category === "notify" &&
		css`
			width: 400px;
			height: 300px;
		`}

	${(props) =>
		props.category === "feed" &&
		css`
			width: 300px;
			height: 300px;
			margin-left: 20rem;
			z-index: 1;
		`}
`;

const DropdownItem = styled.div`
	padding: 8px 16px;
	&:hover {
		background-color: #fafafa;
	}
`;
