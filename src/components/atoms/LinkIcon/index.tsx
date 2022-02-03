/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { handleImgType } from "lib/utils";

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

interface divType {
	category: string;
	primary?: boolean;
	link?: string;
	onClick?: () => void;
}

const ImgIcon: FunctionComponent<divType> = ({ ...props }) => {
	return (
		<StyledLink to={`${props.link}`}>
			<StyledDiv
				category={props.category}
				onClick={props.onClick}
				primary={props.primary}
			/>
		</StyledLink>
	);
};

ImgIcon.defaultProps = {
	category: "Home",
	primary: false,
	link: "/",
};

export default ImgIcon;
