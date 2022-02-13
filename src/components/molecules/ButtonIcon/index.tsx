import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon, { IconTypes } from "../../atoms/Icon";
import { useDispatch } from "react-redux";
import Image from "components/atoms/Image";

/* 버튼 아이콘은 icon과 profile 그리고 feed 버튼으로 나뉩니다.
 피드에 나타나는 버튼은 마우스 오버시 드롭다운 기능이 있습니다.*/

interface ButtonType {
	category: "icon" | "profile";
	name?: IconTypes;
	hover: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonIcon: FunctionComponent<ButtonType> = (props) => {
	const { category, name, hover = false, onClick } = props;
	const [isHover, setHoverState] = useState<boolean>(false);

	return (
		<StyledButton
			onClick={onClick}
			onMouseOver={() => hover && setHoverState(true)}
			onMouseLeave={() => hover && setHoverState(false)}
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
	padding: 0 0;
	background: none;
	border: none;
	display: flex;
	align-items: center;
	justify-contents: center;

	cursor: pointer;
`;
