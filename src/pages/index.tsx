import NavBar from "components/organisms/NavBar";
import React, { FunctionComponent, useEffect, useState } from "react";
import HomeTemplate from "components/templates/Home";
import Feed from "components/organisms/Feed";
import { requestImages } from "utils/amplify";
import ImgUploadBox from "components/molecules/ImgUploadBox";
import { requestFeedInfo } from "lib/request/feed";

export type feedArrayType = {
	post_id: number;
	user_id: string;
	image_path: string;
	content: string;
	created_at: string;
	like_count: number;
	comment_count: number;
};

const HomePage: FunctionComponent = () => {
	return (
		<HomeTemplate
			navbar={<NavBar />}
			feed={<Feed />}
			sidebar={<ImgUploadBox />}
		></HomeTemplate>
	);
};

export default HomePage;
