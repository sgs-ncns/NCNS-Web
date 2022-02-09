import React, { FunctionComponent } from "react";
import Image from "components/atoms/Image";
import styled from "styled-components";
import mok1 from "static/imgs/mok1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FeedBodyProps {
	src: any;
}

const FeedBody: FunctionComponent<FeedBodyProps> = (props) => {
	const { src } = props;
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
			{src.map((image: { key: string }, index: any) => {
				const imageUrl =
					"https://sgsncns130837-dev.s3.ap-northeast-2.amazonaws.com/public/" +
					image.key;
				return <Image src={imageUrl} category={"rectangle"} width="612px" />;
			})}
		</Slider>
	);
};

export default FeedBody;
