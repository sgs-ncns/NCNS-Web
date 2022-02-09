import { Divider } from "common/styles";
import useOutsideClick from "hooks/useOutsideClick";
import { requestNotify } from "lib/request/notify";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "reducers";
import { closeMenu } from "reducers/dropReducer";
import styled, { css } from "styled-components";

interface DropdownProps {
	category: "notify" | "profile" | "feed";
	showNotify?: boolean;
	showProfile?: boolean;
	showFeed?: boolean;
}

const Dropdown = (props: DropdownProps) => {
	const { category, showNotify, showProfile, showFeed } = props;
	const menu = ["프로필", "저장됨", "계정 전환"];
	const dispatch = useDispatch();
	const myId = useSelector((state: RootState) => state.userReducer.accountName);
	const ref = useRef(null);
	const [datas, setDatas] = useState([]);
	const navigate = useNavigate();

	switch (category) {
		case "notify":
			{
				//내 아이디는 selector해서
				useEffect(() => {
					const res = requestNotify("95.seong").then((data) => {
						setDatas(data.data);
					});
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
			{category === "notify" &&
				datas.map((data, index) => {
					return (
						<div key={index}>{data.target_name}이 좋아요를 눌렀습니다.</div>
					);
				})}
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
					<DropdownItem>로그아웃</DropdownItem>
				</>
			)}
		</DropdownMenu>
	);
};

export default Dropdown;

// display: ${(props) => (props.show ? `block` : `none`)};
const DropdownMenu = styled.div<{ category: string }>`
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
			width: 300px;
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
