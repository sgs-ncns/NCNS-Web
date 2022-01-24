import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

interface ButtonType {
	type: "button" | "submit";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	primary?: boolean;
	width?: string;
	height?: string;
	valid?: boolean;
	active?: boolean;
}

const RequestButton: FunctionComponent<ButtonType> = (props) => {
	const {
		type,
		onClick,
		primary = true,
		width,
		height,
		valid = true,
		active = true,
	} = props;
	return active ? (
		<StyledButton
			type={type}
			primary={primary}
			width={width}
			height={height}
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
