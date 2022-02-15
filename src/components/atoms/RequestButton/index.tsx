import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

// 가장 주요하게 사용되는 버튼입니다.
//
// 로그인 때의 폼 타입 체크 후 활성화 되는 기능과 팔로우시 회색으로 바뀌는 기능을 내포하고 있습니다.

interface ButtonType {
	type: "button" | "submit";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	//primary는 파란색 바탕의 하얀 글씨인 팔로우버튼과 그 반대인 게시물 게시 버튼을 갖게 됩니다.
	primary?: boolean;
	kkanbu?: boolean;
	width?: string;
	height?: string;
	//valid는 팔로우 언팔로우 에 대한 조건적 css 기능을 위한 props입니다.
	valid?: boolean;
	//active는 로그인 회원가입 때 폼 타입 체크 시 활성화 비활성화 되는 기능을 위한 props입니다.
	active?: boolean;
}

const RequestButton: FunctionComponent<ButtonType> = (props) => {
	const {
		type,
		onClick,
		primary = true,
		width,
		height,
		kkanbu = false,
		valid = true,
		active = true,
	} = props;
	return active ? (
		<StyledButton
			type={type}
			primary={primary}
			width={width}
			height={height}
			kkanbu={kkanbu}
			onClick={onClick}
			valid={valid}
		>
			{props.children}
		</StyledButton>
	) : (
		<StyledDiv width={width} height={height} primary={primary}>
			{props.children}
		</StyledDiv>
	);
};

export default RequestButton;

const StyledButton = styled.button<{
	width: string;
	height: string;
	primary: boolean;
	valid: boolean;
	kkanbu: boolean;
}>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: 14px;
	font-weight: 600;
	border-radius: 3px;
	cursor: pointer;
	${(props) =>
		props.primary
			? css`
					color: #3598f0;
					background: 0 0;
					border: none;
			  `
			: css`
					color: #ffffff;
					background: #3598f0;
					border: none;
			  `};

	${(props) =>
		props.kkanbu &&
		css`
			color: white;
			background: #76d672;
			border: none;
		`}

	${(props) =>
		!props.valid &&
		css`
			background: #fafafa;
			border: 1px solid #dbdbdb;
			color: black;
		`}
`;

const StyledDiv = styled.div<{
	width: string;
	height: string;
	primary: boolean;
}>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: 14px;
	font-weight: 600;
	border-radius: 3px;
	opacity: 0.5;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: default;

	${(props) =>
		props.primary
			? css`
					color: #3598f0;
					background: 0 0;
					border: none;
			  `
			: css`
					color: #ffffff;
					background: #3598f0;
					border: none;
			  `};
`;
