import React, { FunctionComponent } from "react";
import Image from "components/atoms/Image";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonIcon from "components/molecules/ButtonIcon";

// react slick 라이브러리를 사용하여 image carousel을 구현한 부분입니다.
// custom arrow를 통해 화살표의 위치나 모양을 변경하였으며,
// map 함수를 통해 이미지 소스를 S3에 접근하여 가져옵니다.

interface FeedBodyProps {
	src: Array<string>;
}

const PrevArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className="slick-arrow"
			style={{
				// ...style,
				width: "26px",
				height: "26px",
				display: "flex",
				zIndex: 1,
				background: "#dbdbdb",
				borderRadius: "50%",
			}}
		>
			<ButtonIcon
				name="LeftArrow"
				hover={false}
				category={"icon"}
				onClick={onClick}
			/>
		</div>
	);
};

const NextArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				marginRight: "5%",
				zIndex: 1,
			}}
		>
			<ButtonIcon
				name="RightArrow"
				hover={false}
				category={"icon"}
				onClick={onClick}
			/>
		</div>
	);
};

const FeedBody: FunctionComponent<FeedBodyProps> = (props) => {
	const { src } = props;
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};
	return (
		<Container>
			<StyledSlider {...settings}>
				{src.map((imageUrl: string, index: number) => {
					return (
						<Image
							src={imageUrl}
							key={index}
							category={"rectangle"}
							width="612px"
						/>
					);
				})}
			</StyledSlider>
		</Container>
	);
};

const Container = styled.div``;

const StyledSlider = styled(Slider)`
	padding: 0 0;
	width: 100%;
	background-color: black;
	.slick-slide .slidecontainer {
		display: inline-block;
		vertical-align: middle;
		float: none;
	}
	.slick-track {
		position: relative;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
	}
`;
export default FeedBody;
