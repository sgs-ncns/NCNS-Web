import ButtonIcon from "components/molecules/ButtonIcon";
import React, { useEffect, useState } from "react";
import Image from "components/atoms/Image";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedArrayType } from "pages";
import { requestImages, S3_ADDRESS } from "utils/amplify";
import { openModal } from "reducers/modalReducer";
import { useDispatch } from "react-redux";

interface SliderProps {
	src?: string;
	recentFeeds: Array<feedArrayType>;
	onClick?: VoidFunction;
}

const MulitpleSlider = (props: SliderProps) => {
	const { src, recentFeeds, onClick } = props;
	const [images, setImages] = useState<Array<string>>();
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (recentFeeds) {
			console.log("배재대학고", recentFeeds);
			const asyncLoop = async () => {
				const newRecentFeeds = recentFeeds.map(async (feedInfo) => {
					return await requestImages(
						feedInfo.user_id,
						feedInfo.image_path,
						1,
					).then((res) => S3_ADDRESS + res[0].key);
				});
				const results = Promise.all(newRecentFeeds);
				return results;
			};
			asyncLoop()
				.then((res) => {
					setImages(res);
					console.log("뿌앙뿌앙", res);
				})
				.catch((err) => {
					console.log(err);
					return;
				});
		}
	}, []);

	useEffect(() => {
		if (images) setLoading(false);
		else setLoading(true);
	}, [images]);

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
				{images &&
					images.map((imageSrc, index) => (
						<ImageContainer
							key={index}
							onClick={() =>
								dispatch(openModal("feed", recentFeeds[index].post_id))
							}
						>
							<Image category={"rectangle"} src={imageSrc} height={"100%"} />
						</ImageContainer>
					))}
			</StyledSlider>
		</Container>
	);
};

export default MulitpleSlider;

const Container = styled.div`
	display: flex;
	background: gray;
	border-radius: 10px;
	flex-direction: row;
	height: 300px;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const StyledSlider = styled(Slider)`
	padding: 0 0;
	width: 90%;
	.slick-list {
		.slick-track {
			display: flex;
			height: 100%;
			margin-left: -60px;

			.slick-slide {
				margin-left: 20px;
				align-items: center;
				justify-content: center;
			}
		}
	}
`;

//이거로 이미지 사이즈 조정
const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	width: 10%;
	z-index: 1;
	height: 300px;
	background: black;
	cursor: pointer;
`;
