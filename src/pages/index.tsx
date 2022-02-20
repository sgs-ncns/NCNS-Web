import NavBar from "components/organisms/NavBar";
import React, { FunctionComponent, useEffect, useState } from "react";
import HomeTemplate from "components/templates/Home";
import Feed from "components/organisms/Feed";
import { requestImages } from "utils/amplify";
import ImgUploadBox from "components/molecules/ImgUploadBox";
import { requestFeedInfo } from "lib/request/feed";
import RequestButton from "components/atoms/RequestButton";
import styled from "styled-components";
import PictureFeed from "components/organisms/PictureFeed";

export type feedArrayType = {
	post_id: number;
	user_id: number;
	account_name: string;
	image_path: string;
	content: string;
	created_at: string;
	like_count: number;
	comment_count: number;
};

const HomePage: FunctionComponent = () => {
	const [isPicture, setIsPicture] = useState<boolean>(false);

	return (
		<HomeTemplate
			navbar={<NavBar />}
			feed={!isPicture ? <Feed /> : <PictureFeed />}
			sidebar={<ImgUploadBox />}
			isPicture={isPicture}
		>
			<ButtonGrid>
				<RequestButton
					type={"button"}
					primary={false}
					onClick={() => setIsPicture(false)}
				>
					일반
				</RequestButton>
				<RequestButton
					type={"button"}
					primary={false}
					onClick={() => setIsPicture(true)}
				>
					깐부
				</RequestButton>
			</ButtonGrid>
		</HomeTemplate>
	);
};

export default HomePage;

const ButtonGrid = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin: 0 auto;
	margin-top: 2%;
	margin-bottom: 2%;
`;
