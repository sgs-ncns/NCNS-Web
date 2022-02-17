import Contents from "components/molecules/Contents";
import NavBar from "components/organisms/NavBar";
import ProfileHeader from "components/organisms/Profile/ProfileHeader";
import SearchTemplate from "components/templates/Search";
import { requestFeedInfo, requestUserInfo } from "lib/request/feed";
import { requestUserPosts } from "lib/request/profile";
import { userInfoType, userPostsType } from "lib/request/type";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "reducers";
import mok from "static/imgs/mok2.jpg";

const Profile: FunctionComponent = () => {
	const [thumbnails, setThumbnails] = useState([mok, mok, mok, mok, mok, mok]);
	const [isMe, setIsMe] = useState(false);
	const myAccountName = useSelector(
		(state: RootState) => state.userReducer.accountName,
	);
	const userName = useParams();
	const [userInfo, setUserInfo] = useState<userInfoType>();
	const [posts, setPosts] = useState<Array<userPostsType>>();

	useEffect(() => {
		//사용자 정보 조회
		console.log(userName);
		if (userName.id.match(myAccountName)) setIsMe(true);
		else setIsMe(false);
		(async () => {
			try {
				const res: userInfoType = await requestUserInfo(userName.id);
				setUserInfo({ ...res });
				if (res.post_count !== 0) {
					const postArray: Array<userPostsType> = await requestUserPosts(
						res.id,
					);
					setPosts([...postArray]);
					console.log(posts);
				}
			} catch (err) {
				console.log(err);
				return;
			}
		})()
			.then()
			.catch((err) => {
				console.log(err);
				return;
			});
	}, [userName]);

	return (
		<div>
			<SearchTemplate
				navbar={<NavBar />}
				header={<ProfileHeader isMe={isMe} userInfo={userInfo} />}
				article={<Contents category={"profile"} thumbnails={thumbnails} />}
			/>
		</div>
	);
};

export default Profile;
