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

const imageSize = (size: string) => {
	switch (size) {
		case "small":
			return;
		case "middle":
			return "293px";
		case "big":
			return "614px";
	}
};

const StyledCanvas = styled.div<ImageType>`
	${(props) =>
		props.category === "rectangle"
			? css`
					width: ${props.width};
			  `
			: css`
					width: ${props.width};
					height: ${props.width};
			  `};
`;

const StyledImg = styled.img<ImageType>`
	${(props) =>
		props.category === "rectangle"
			? css`
					width: ${props.width};
			  `
			: props.category === "square"
			? css`
					width: ${props.width};
					height: ${props.width};
			  `
			: css`
					width: ${props.width};
					height: ${props.width};
					border-radius: 50%;
			  `};
`;
