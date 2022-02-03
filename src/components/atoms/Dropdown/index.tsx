import useOutsideClick from "hooks/useOutsideClick";
import React, { FunctionComponent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { closeMenu } from "reducers/dropReducer";
import styled, { css } from "styled-components";

interface DropdownProps {
	category: "notify" | "profile" | "feed";
}

const Dropdown = (props: DropdownProps) => {
	const { category } = props;
	const menu = ["프로필", "저장됨", "계정 전환"];
	const dispatch = useDispatch();
	const ref = useRef(null);

	useOutsideClick(ref, () => {
		dispatch(closeMenu());
	});

	return (
		<DropdownMenu ref={ref} category={category}>
			{category === "feed" && <div>hello</div>}
			{category === "notify" && <div>"contea95님이 좋아요를 눌렀습니다."</div>}
			{category === "profile" && (
				<>
					{menu.map((item, index) => (
						<DropdownItem key={index}>{item}</DropdownItem>
					))}
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

const Divider = styled.hr`
	background-color: #dbdbdb;
`;
