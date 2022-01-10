import React, { FunctionComponent } from "react";
import logo from "static/imgs/logo.png";
import styled from "styled-components";

const StyledImg = styled.img`
	src: ${(props) => props.src};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`;

StyledImg.defaultProps = {
	src: logo,
};

interface LogoType {
	src?: string;
	width?: string;
	height?: string;
}

const Img: FunctionComponent<LogoType> = ({ src, width, height }) => {
	return <StyledImg src={src} width={width} height={height} />;
};

export default Img;
