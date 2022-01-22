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
	return (
		<StyledButton
			type={type}
			primary={primary}
			width={width}
			height={height}
			onClick={onClick}
			valid={valid}
			active={active}
		>
			{props.children}
		</StyledButton>
	);
};

export default RequestButton;

const StyledButton = styled.button<ButtonType>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	border-radius: 3px;

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

	${(props) =>
		!props.active &&
		css`
			opacity: 0.5;
		`}
`;
