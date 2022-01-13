import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
	children?: string;
	link?: string;
};

const LinkedId: FunctionComponent<LinkProps> = (props) => {
	const { children, link } = props;
	return <StyledLink to={`${link}`}>{children}</StyledLink>;
};

LinkedId.defaultProps = {
	link: "/",
};

export default LinkedId;

const StyledLink = styled(Link)`
	color: #262626;
	&:after {
		color: #262626;
	}
`;
