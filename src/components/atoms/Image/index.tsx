import React, { FunctionComponent, ReactComponentElement } from "react";
import mok from "static/imgs/default_profile.jpg";
import styled, { css } from "styled-components";

// 인스타그램에서 이미지는 3가지의 형태로 구분됩니다.
// 피드 직사각형 이미지, 추천/검색 정사각형 이미지, 프로필용 원형 이미지
// 저는 이 부분을 category 값을 통해 세 가지 모양의 이미지 컴포넌트를 구현하였습니다.

interface ImageType {
	category: "circle" | "square" | "rectangle";
	src?: any;
	width?: string;
	height?: string;
	gradation?: boolean;
}

const Image: FunctionComponent<ImageType> = (props) => {
	const { category, src, width, height, gradation = false } = props;
	return (
		<StyledCanvas
			category={category}
			width={width}
			height={height}
			gradation={gradation}
		>
			<StyledImg category={category} src={src} />
		</StyledCanvas>
	);
};

Image.defaultProps = {
	src: mok,
};

export default Image;

const StyledCanvas = styled.div<ImageType>`
	${(props) =>
		props.category === "rectangle"
			? css`
					width: ${props.width ? props.width : "auto"};
					height: ${props.height ? props.height : "auto"};
			  `
			: css`
					width: ${props.width};
					height: ${props.width};
			  `};

	${(props) =>
		props.category === "circle" &&
		css`
			border-radius: 50%;
		`}
	${(props) =>
		props.gradation &&
		css`
			border: 3px solid transparent;
			background-image: linear-gradient(#fff, #fff),
				linear-gradient(to right, red 0%, orange 100%);
			background-origin: border-box;
			background-clip: content-box, border-box;
		`}
`;

const StyledImg = styled.img<{ category: string }>`
	width: 100%;
	height: 100%;
	border-radius: ${(props) => props.category === "circle" && "50%"};
`;
