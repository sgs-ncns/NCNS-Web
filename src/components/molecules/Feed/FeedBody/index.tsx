import React, { FunctionComponent, useEffect, useState } from "react";
import Image from "components/atoms/Image";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonIcon from "components/molecules/ButtonIcon";
import Spinner from "components/atoms/Spinner";
import { requestImages, S3_ADDRESS } from "utils/amplify";

// react slick 라이브러리를 사용하여 image carousel을 구현한 부분입니다.
// custom arrow를 통해 화살표의 위치나 모양을 변경하였으며,
// map 함수를 통해 이미지 소스를 S3에 접근하여 가져옵니다.

interface ArrowProps {
	className: any;
	style: React.CSSProperties;
	onClick: VoidFunction;
	category: "left" | "right";
}

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
				position: "absolute",
				marginLeft: "-20px",
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
	userId?: number;
	imagePath?: string;
}

const FeedBody: FunctionComponent<FeedBodyProps> = (props) => {
	const { src, userId, imagePath } = props;
	const [imgs, setImgs] = useState<Array<string>>();
	const [isLoading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (userId && imagePath) {
			requestImages(userId, imagePath)
				.then((response) => {
					const result = response.map((value) => {
						return S3_ADDRESS + value.key;
					});
					setImgs([...result]);
				})
				.catch((err) => {
					console.log(err);
					return;
				});
		}
		if (src) setImgs([...src]);
		return setImgs(null);
	}, [userId, imagePath]);

	useEffect(() => {
		if (imgs) setLoading(false);
		else setLoading(true);
	}, [imgs]);

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
									width="100%"
								/>
							);
						})}
				</StyledSlider>
			)}
		</Container>
	);
};

export default FeedBody;

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
	.slick-track {
		display: flex;
		align-items: center;
		.slick-slide {
			display: flex;
			height: auto;
			align-items: center;
		}
	}
`;
