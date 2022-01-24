import React, { FunctionComponent } from "react";
import Image from "components/atoms/Image";
import styled from "styled-components";
import mok1 from "static/imgs/mok1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedBody: FunctionComponent = () => {
	const mok = [mok1, mok1, mok1, mok1];
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	};
	return (
		<Slider {...settings}>
			{mok.map((src, index) => {
				return <Image src={src} category={"rectangle"} width="612px" />;
			})}
		</Slider>
	);
};

export default FeedBody;
