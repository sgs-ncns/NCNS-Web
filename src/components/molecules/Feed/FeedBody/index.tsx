import React, { FunctionComponent, useEffect, useState } from "react";
import Image from "components/atoms/Image";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonIcon from "components/molecules/ButtonIcon";
import Spinner from "components/atoms/Spinner";

// react slick 라이브러리를 사용하여 image carousel을 구현한 부분입니다.
// custom arrow를 통해 화살표의 위치나 모양을 변경하였으며,
// map 함수를 통해 이미지 소스를 S3에 접근하여 가져옵니다.

interface ArrowProps {
	className: any;
	style: React.CSSProperties;
	onClick: VoidFunction;
	category: "left" | "right";
}

// const Arrow = (props: ArrowProps) => {
// 	const { className, style, onClick } = props;
// 	return (
// 		<div
// 			className="slick-arrow"
// 			// className={className}
// 			style={{
// 				...style,
// 				position: "absolute",
// 				marginTop: "60%",
// 				width: "26px",
// 				height: "26px",
// 				zIndex: 1,
// 				background: "#dbdbdb",
// 				borderRadius: "50%",
// 				display: "flex",
// 				justifyContent: "center",
// 			}}
// 		>
// 			<ButtonIcon
// 				name="LeftArrow"
// 				hover={false}
// 				category={"icon"}
// 				onClick={onClick}
// 			/>
// 		</div>
// 	);
// };

const PrevArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<ButtonIcon
			className={"slick-prev slick-arrow"}
			style={{
				...style,
			}}
			name="LeftArrow"
			hover={false}
			category={"icon"}
			onClick={onClick}
		/>
	);
};

const NextArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<ButtonIcon
			className={"slick-next slick-arrow"}
			style={{
				...style,
			}}
			name="RightArrow"
			hover={false}
			category={"icon"}
			onClick={onClick}
		/>
	);
};

interface FeedBodyProps {
	src?: Array<string> | any;
}

const FeedBody: FunctionComponent<FeedBodyProps> = (props) => {
	const { src } = props;
	const [imgs, setImgs] = useState<Array<string>>();
	const [isLoading, setLoading] = useState<boolean>(true);

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

	useEffect(() => {
		src.then((response: any) => {
			setImgs(response);
			setLoading(false);
		});
	}, [src]);

	return (
		<Container isLoading={isLoading}>
			{isLoading ? (
				<Spinner />
			) : (
				<StyledSlider {...settings}>
					{imgs &&
						imgs.map((imageUrl, index) => {
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
			)}
		</Container>
	);
};

const Container = styled.div<{ isLoading: boolean }>`
	${(props) =>
		props.isLoading &&
		css`
			display: flex;
			height: 500px;
			justify-content: center;
			align-items: center;
		`}
`;

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
