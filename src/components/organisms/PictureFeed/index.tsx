import LinkedId from "components/atoms/LinkedId";
import ButtonIcon from "components/molecules/ButtonIcon";
import MulitpleSlider from "components/molecules/Feed/MultipleSlider";
import { requestKkanbuFeedInfo } from "lib/request/feed";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PictureFeed = () => {
	const [kkanbuList, setKkanbuList] = useState<Array<number>>();
	const [feedImages, setFeedImages] = useState();

	useEffect(() => {
		console.log("통신 함수 불러서 바인딩");
		const getKkanbuFeed = async () => {
			try {
				const res = await requestKkanbuFeedInfo();
				setKkanbuList(res);
			} catch (err) {
				console.log(err);
				return;
			}
		};
		getKkanbuFeed()
			.then()
			.catch((err) => {
				console.log(err);
				return;
			});
	}, []);

	// useEffect(() => {
	// 	if (kkanbuList) {
	// 	}
	// }, [kkanbuList]);

	// TODO : map 함수 돌리기
	return (
		<ContentsGrid>
			<Profile>
				<ButtonIcon category={"profile"} hover={false} width={"60px"} />
				<LinkedId underline={false}>userId</LinkedId>
			</Profile>
			<FeedsArray>
				<MulitpleSlider />
			</FeedsArray>
		</ContentsGrid>
	);
};

export default PictureFeed;

const ContentsGrid = styled.div`
	border: 1px solid #dbdbdb;
	border-radius: 5px;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	align-items: center;
`;

const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 20%;
`;

const FeedsArray = styled.div`
	width: 80%;
	height: auto;
`;
