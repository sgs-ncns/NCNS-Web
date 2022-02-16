import ButtonIcon from "components/molecules/ButtonIcon";
import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
	src?: Array<string> | any;
}

const MulitpleSlider = () => {
	const slides = [
		"https://sgsncns130837-dev.s3.ap-northeast-2.amazonaws.com/public/95.seong/d/13.jpeg",
		"https://sgsncns130837-dev.s3.ap-northeast-2.amazonaws.com/public/95.seong/d/14.jpeg",
		"https://sgsncns130837-dev.s3.ap-northeast-2.amazonaws.com/public/95.seong/d/15.jpeg",
		"https://sgsncns130837-dev.s3.ap-northeast-2.amazonaws.com/public/95.seong/d/16.jpeg",
	];

	const settings = {
		dots: true,
		centerMode: true,
		infinite: false,
		centerPadding: "60px",
		variableWidth: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
	};

	return (
		<Container>
			<StyledSlider {...settings}>
				<div style={{ width: "400px" }}>
					<h3>1</h3>
				</div>
				<div style={{ width: "200px" }}>
					<h3>2</h3>
				</div>
				<div style={{ width: "300px" }}>
					<h3>3</h3>
				</div>
				<div style={{ width: "500px" }}>
					<h3>4</h3>
				</div>
				<div style={{ width: "600px" }}>
					<h3>5</h3>
				</div>
				<div style={{ width: "600px" }}>
					<h3>6</h3>
				</div>
			</StyledSlider>
		</Container>
	);
};

export default MulitpleSlider;

const Container = styled.div`
	display: flex;
	background-color: orange;
	flex-direction: row;
	height: 300px;
	width: 100%;
	overflow: visible;
	justify-content: center;
	align-items: center;
	border: 1px solid orange;
`;

const StyledSlider = styled(Slider)`
	padding: 0 0;
	border: 1px solid green;
	width: 80%;
	height: 100%;
`;
