import { handleImgType } from "lib/utils";
import React, { FunctionComponent, useRef, useState } from "react";
import styled from "styled-components";
import Like from "static/imgs/icons/like@2x.png";
import Icon, { IconTypes } from "../../atoms/Icon";
import Dropdown from "../../atoms/Dropdown";
import useOutsideClick from "hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import Image from "components/atoms/Image";

interface ButtonType {
	category: "icon" | "profile" | "feed";
	name?: IconTypes;
	hover?: boolean;
	fill?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonIcon: FunctionComponent<ButtonType> = (props) => {
	const {
		category,
		name,
		fill,
		hover = false,
		onClick,
		onMouseOver,
		onMouseLeave,
	} = props;
	const dispatch = useDispatch();

	return (
		<StyledButton
			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}
		>
			{category === "icon" ? (
				<Icon name={name} hover={hover} />
			) : (
				<Image category={"circle"} width="25px" />
			)}
		</StyledButton>
	);
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
