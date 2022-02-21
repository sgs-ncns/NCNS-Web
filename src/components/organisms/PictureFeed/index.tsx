import LinkedId from "components/atoms/LinkedId";
import ButtonIcon from "components/molecules/ButtonIcon";
import MulitpleSlider from "components/molecules/Feed/MultipleSlider";
import {
	KkanbuFeedResponseType,
	requestKkanbuFeedInfo,
} from "lib/request/feed";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PictureFeed = () => {
	const [kkanbuList, setKkanbuList] = useState<Array<KkanbuFeedResponseType>>();
	const [feedImages, setFeedImages] = useState();
	//isLoading 달기

	useEffect(() => {
		console.log("통신 함수 불러서 바인딩");
		const getKkanbuFeed = async () => {
			try {
				const res: Array<KkanbuFeedResponseType> =
					await requestKkanbuFeedInfo();
				console.log(res);
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

	// TODO : map 함수 돌리기
	return (
		<ContentsGrid>
			{kkanbuList && kkanbuList.length > 0 ? (
				kkanbuList.map((value) => {
					return (
						<Grid>
							<Profile>
								<ButtonIcon category={"profile"} hover={false} width={"60px"} />
								<LinkedId underline={false}>
									{value.recent_feeds[0].account_name}
								</LinkedId>
							</Profile>
							<FeedsArray>
								<MulitpleSlider recentFeeds={value.recent_feeds} />
							</FeedsArray>
						</Grid>
					);
				})
			) : (
				<h2>깐부가 없습니다. 깐부를 추가해보세요!</h2>
			)}
		</ContentsGrid>
	);
};
export default PictureFeed;

const ContentsGrid = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	align-items: center;
	justify-content: center;
`;

const Grid = styled.div`
	border: 1px solid #dbdbdb;
	border-radius: 5px;
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 50px;
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
