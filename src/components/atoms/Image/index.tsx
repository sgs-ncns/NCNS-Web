import React, { FunctionComponent } from "react";
import mok from "static/imgs/mok1.jpg";
import styled, { css } from "styled-components";

// 인스타그램에서 이미지는 3가지의 형태로 구분됩니다.
// 피드 직사각형 이미지, 추천/검색 정사각형 이미지, 프로필용 원형 이미지
// 저는 이 부분을 category 값을 통해 세 가지 모양의 이미지 컴포넌트를 구현하였습니다.

interface ImageType {
	category: "circle" | "square" | "rectangle";
	src?: string;
	width?: string;
}

const Image: FunctionComponent<ImageType> = (props) => {
	const { category, src, width } = props;
	return (
		<Canvas category={category} width={width}>
			<StyledImg category={category} src={src} width={width} />
		</Canvas>
	);
};

Image.defaultProps = {
	src: mok,
};

export default Image;

const Canvas = styled.div<ImageType>`
	${(props) =>
		props.category === "rectangle"
			? css`
					height: 100%;
			  `
			: css`
					width: ${props.width};
					height: ${props.width};
			  `};
`;

const StyledImg = styled.img<ImageType>`
	width: 100%;
	height: 100%;
	border-radius: ${(props) => props.category === "circle" && "50%"};
`;
