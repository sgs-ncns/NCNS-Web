import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "components/atoms/Image";
import ProfileInfo from "components/molecules/ProfileInfo";
import { useParams } from "react-router-dom";
import { RootState } from "reducers";
import { useSelector } from "react-redux";
import { requestUserInfo } from "lib/request/feed";
import { userInfoType } from "lib/request/type";

// 프로필 페이지를 가게 되면 위쪽에 뜨는 헤더 부분입니다.
// Body 파트는 Contents 컴포넌트를 재사용 하였습니다.
interface HeaderProps {
	userInfo: userInfoType;
	isMe: boolean;
}

const ProfileHeader = (props: HeaderProps) => {
	const { userInfo, isMe } = props;
	return (
		<StyledHeader>
			<ImageGrid>
				<Image category={"circle"} width="150px" />
			</ImageGrid>
			{userInfo && (
				<ProfileInfo
					isMe={isMe}
					accountName={userInfo.account_name}
					userId={userInfo.id}
					postCount={userInfo.post_count}
					followerCount={userInfo.follower_count}
					followingCount={userInfo.following_count}
				/>
			)}
		</StyledHeader>
	);
};

export default ProfileHeader;

const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	margin-top: 44px;
	margin-bottom: 44px;
	flex-direction: row;
`;

const ImageGrid = styled.div`
	display: flex;
	margin: 0px 30px 0px 0px;
	justify-content: center;
`;
