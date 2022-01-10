/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Home from "static/imgs/Home@2x.png";

const StyledDiv = styled.div<divType>`
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${Home});
	${(props) =>
		props.primary
			? css`
					width: 24px;
					height: 24px;
			  `
			: css`
					width: 1000px;
					height: 1000px;
			  `}
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
	primary: boolean;
	link?: string;
	// width?: string;
	// height?: string;
}

const ImgLink: FunctionComponent<divType> = ({ ...props }) => {
	return (
		<Link to={`${props.link}`}>
			<StyledDiv
				category={props.category}
				primary={props.primary}
				// width={props.width}
				// height={props.height}
			/>
		</Link>
	);
};

ImgLink.defaultProps = {
	category: "Home",
	primary: false,
	link: "/",
};

export default ImgLink;
