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
		case "LikeFilledBlack":
			return <svg.LikeFilledBlack />;
		case "LikeFilledRed":
			return <svg.LikeFilledRed />;
		case "Upload":
			return <svg.Upload />;
		case "Home":
			return <svg.Home />;
		default:
			return null;
	}
};

export default Icon;

const StyledLike = styled(svg.Like)<{ hover: boolean }>`
	${(props) =>
		props.hover &&
		css`
			path {
				fill: #dbdbdb;
			}
		`}
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
