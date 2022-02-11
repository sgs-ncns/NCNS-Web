import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 링크 아이디는 피드 헤더 부분, 댓글 창 등에 쓰이기 때문에
// 재사용성을 위해 컴포넌트화를 시켰습니다.

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
