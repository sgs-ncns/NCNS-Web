import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import * as svg from "./svg";

// svg 정보들을 받아와서 JSX element로 만들어주는 부분입니다.
// 이미지 리소스를 최소화하기 위해 hover시 스타일 변경이 필요한 이미지는
// props로 넘겨 받아 path값을 수정합니다.

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
