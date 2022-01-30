import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import * as svg from "./svg";

export type IconTypes = keyof typeof svg;

interface IconProps {
	name: IconTypes;
	hover: boolean;
}

const Icon: FunctionComponent<IconProps> = (props) => {
	const { name, hover } = props;
	switch (name) {
		case "Like":
			return <StyledLike hover={hover} />;
		case "Comment":
			return <StyledComment hover={hover} />;
		case "Add":
			return <svg.Add />;
		case "Home":
			return <svg.Home />;
		case "Messanger":
			return <svg.Messanger />;
		default:
			return null;
	}
};

export default Icon;

const StyledLike = styled(svg.Like)<{ hover: boolean }>`
	${(props) =>
		props.hover &&
		css`
			:hover {
				path {
					fill: #dbdbdb;
				}
			}
		`}
	path {
		fill: black;
	}
`;

const StyledComment = styled(svg.Comment)<{ hover: boolean }>`
	${(props) =>
		props.hover &&
		css`
			:hover {
				path {
					fill: #dbdbdb;
				}
			}
		`}
	path {
		fill: black;
	}
`;
