import React, { FunctionComponent } from "react";
import mok from "static/imgs/mok1.jpg";
import styled, { css } from "styled-components";

interface ImageType {
	category: "circle" | "square" | "rectangle";
	src?: string;
	width?: string;
	height?: string;
}

const Image: FunctionComponent<ImageType> = (props) => {
	const { category, src, width, height } = props;
	return (
		<StyledCanvas category={category} width={width} height={height}>
			<StyledImg category={category} src={src} width={width} height={height} />
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
					width: 100%;
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
