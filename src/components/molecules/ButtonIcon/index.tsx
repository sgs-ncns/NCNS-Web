import { handleImgType } from "lib/utils";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Like from "static/imgs/icons/like@2x.png";
import Icon, { IconTypes } from "../../atoms/Icon";
import { useDispatch } from "react-redux";
import Image from "components/atoms/Image";

interface ButtonType {
	category: "icon" | "profile" | "feed";
	name?: IconTypes;
	hover?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonIcon: FunctionComponent<ButtonType> = (props) => {
	const { category, name, hover = false, onClick } = props;
	const dispatch = useDispatch();
	const [isHover, setHoverState] = useState<boolean>(false);

	useEffect(() => {
		console.log(isHover);
	}, [isHover]);

	return (
		<StyledButton
			onClick={onClick}
			onMouseOver={() => hover && setHoverState(true)}
			onMouseLeave={() => hover && setHoverState(false)}
		>
			{category === "icon" ? (
				<Icon name={name} hover={hover && isHover} />
			) : (
				<Image category={"circle"} width="25px" />
			)}
		</StyledButton>
	);
};

export default ButtonIcon;

const StyledButton = styled.button`
	padding: 0 0;
	background: none;
	border: none;
	display: flex;
	align-items: center;
	justify-contents: center;

	cursor: pointer;
`;
