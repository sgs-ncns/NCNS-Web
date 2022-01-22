import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
	children?: string;
	underline: boolean;
};

const LinkedId: FunctionComponent<LinkProps> = (props) => {
	const { children, underline } = props;
	return (
		<StyledLink to={`${children}`} underline={underline}>
			{children}
		</StyledLink>
	);
};

LinkedId.defaultProps = {
	children: "/",
};

export default LinkedId;

const StyledLink = styled(Link)<LinkProps>`
	color: #262626;
	text-decoration: none;
	font-weight: 600;
	&:after {
		color: #262626;
	}
	&:hover {
		text-decoration: ${(props) => props.underline && "underline black"};
	}
`;
