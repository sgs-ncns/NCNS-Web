import React, { FunctionComponent } from "react";
import logo from "static/imgs/logo.png";
import mok from "static/imgs/mok1.jpg";
import styled from "styled-components";

interface ImageType {
	option: "logo" | "feed";
	src?: string;
	size?: "small" | "middle" | "big";
}

const Image: FunctionComponent<ImageType> = (props) => {
	const { option, src, size } = props;
	return <StyledImg option={option} src={src} size={size} />;
};

Image.defaultProps = {
	size: "big",
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
			return "612px";
	}
};

const StyledImg = styled.img<ImageType>`
	width: ${(props) => (props.size ? imageSize(props.size) : props.width)};
`;
