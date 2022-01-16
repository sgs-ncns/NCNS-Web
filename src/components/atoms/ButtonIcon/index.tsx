import { handleImgType } from "lib/utils";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Like from "static/imgs/icons/like@2x.png";

interface iconType {
	category: string;
	fill?: boolean;
	hover?: boolean;
}
const ButtonIcon: FunctionComponent<iconType> = (props) => {
	const { category, fill, hover } = props;
	return (
		<StyledButton>
			<StyledImage src={handleImgType(category)} />
		</StyledButton>
	);
};

ButtonIcon.defaultProps = {
	fill: false,
	hover: false,
};

export default ButtonIcon;

const StyledButton = styled.button`
	align-items: center;
	background: 0 0;
	border: none;
	display: flex;
	padding: 6px;
	padding-left: 0px;
	padding-right: 12px;

	&:hover {
		cursor: pointer;
	}
`;

const StyledImage = styled.img`
	margin-left: 0px;
	width: 24px;
	height: 24px;
`;
