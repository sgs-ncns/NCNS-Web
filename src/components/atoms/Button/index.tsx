import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

interface ButtonType {
	type: "submit" | "reset" | "button";
	children: string;
	background?: string;
	color?: string;
	width?: string;
	height?: string;
	primary?: boolean;
}

const Button: FunctionComponent<ButtonType> = ({ ...props }) => {
	return (
		<StyledButton
			type={props.type}
			background={props.background}
			color={props.color}
			width={props.width}
			height={props.height}
			primary={props.primary}
		>
			{props.children}
		</StyledButton>
	);
};

Button.defaultProps = {
	primary: false,
	width: "256px",
};

export default Button;

const StyledButton = styled.button<ButtonType>`
	border: none;
	border-radius: 4px;
	${(props) =>
		props.primary
			? css`
					background-color: skyblue;
					color: white;
					width: ${props.width};
					height: 30px;
			  `
			: css`
					background-color: ${props.background};
					color: ${props.color};
					width: ${props.width};
					height: ${props.height};
			  `}
`;
