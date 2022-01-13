/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Logo from "static/imgs/logo.png";
import Home from "static/imgs/icons/Home@2x.png";
import Add from "static/imgs/icons/add@2x.png";
import Like from "static/imgs/icons/like@2x.png";
import Message from "static/imgs/icons/message@2x.png";

const handleImgType = (category: string) => {
	switch (category) {
		case CATEGORY.Like:
			return Like;
		case CATEGORY.Logo:
			return Logo;
		case CATEGORY.Add:
			return Add;
		case CATEGORY.Home:
			return Home;
		case CATEGORY.Message:
			return Message;
	}
};

const StyledDiv = styled.div<divType>`
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${(props) => handleImgType(props.category)});
	${(props) =>
		props.primary
			? css`
					width: 24px;
					height: 24px;
			  `
			: css`
					width: 103px;
					height: 29px;
			  `}
`;

const StyledLink = styled(Link)`
	display: inline-block;
`;

// width: ${(props) => (props.primary ? "24px" : props.width)};
// height: ${(props) => (props.primary ? "24px" : props.height)};

const CATEGORY = {
	Logo: "logo",
	Home: "home",
	Message: "message",
	Add: "add",
	Like: "like",
} as const;
type CATEGORY = typeof CATEGORY[keyof typeof CATEGORY];

interface divType {
	category: string;
	primary?: boolean;
	link?: string;
}

const ImgIcon: FunctionComponent<divType> = ({ ...props }) => {
	return (
		<StyledLink to={`${props.link}`}>
			<StyledDiv category={props.category} primary={props.primary} />
		</StyledLink>
	);
};

ImgIcon.defaultProps = {
	category: "Home",
	primary: false,
	link: "/",
};

export default ImgIcon;
