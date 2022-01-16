import { handleButtonType } from "lib/utils";
import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

interface ButtonType {
	type: "button" | "submit";
	primary?: boolean;
}

const RequestButton: FunctionComponent<ButtonType> = (props) => {
	const { type, primary } = props;
	return (
		<StyledButton type={type} primary={primary}>
			{props.children}
		</StyledButton>
	);
};

RequestButton.defaultProps = {
	primary: true,
};

export default RequestButton;

const StyledButton = styled.button<ButtonType>`
	font-size: 14px;
	font-weight: 600;
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
					border-radius: 3px;
			  `}
`;
