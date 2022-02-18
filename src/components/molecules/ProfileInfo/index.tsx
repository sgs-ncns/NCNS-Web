import RequestButton from "components/atoms/RequestButton";
import {
	StyledNumber,
	StyledSpan,
} from "components/organisms/Search/SearchHeader";
import { requestFollow, requestSubscribe } from "lib/request/profile";
import { userInfoType } from "lib/request/type";
import { checkResponseCode } from "lib/utils";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "reducers";
import { openFollowModal } from "reducers/followModalReducer";
import styled from "styled-components";

interface ProfileInfo {
	isMe: boolean;
	userInfo: userInfoType;
}

const ProfileInfo = (props: ProfileInfo) => {
	const { isMe, userInfo } = props;
	console.log("props", props);
	const [isFollow, setFollow] = useState(false);
	console.log(userInfo);
	const [isKkanbu, setKkanbu] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setFollow(userInfo.follow_status);
		setKkanbu(userInfo.subscribe_status);
		console.log(isFollow, isKkanbu);
	}, [userInfo]);

	const followRequest = () => {
		console.log("서버로 팔로우 요청 보내기");
		requestFollow(userInfo.user_id)
			.then((res) => {
				if (checkResponseCode(res) === "00") {
					setFollow(!isFollow);
				}
			})
			.catch((err) => {
				console.log(err);
				return;
			});
	};

	const requestKkanbu = () => {
		console.log("서버로 깐부 요청 보내기");
		requestSubscribe(userInfo.user_id)
			.then((res) => {
				if (checkResponseCode(res) === "00") {
					setKkanbu(!isKkanbu);
				}
			})
			.catch((err) => {
				console.log(err);
				return;
			});
	};

	return (
		<ProfileSection>
			<Profile>
				<StyledH2>{userInfo.account_name}</StyledH2>
				{!isMe && (
					<ButtonGrid>
						<RequestButton
							type={"button"}
							primary={false}
							height="30px"
							onClick={followRequest}
							valid={!isFollow}
						>
							{!isFollow ? "팔로우" : "팔로우 취소"}
						</RequestButton>
						{isFollow && (
							<RequestButton
								type={"button"}
								kkanbu={true}
								height="30px"
								onClick={requestKkanbu}
								valid={!isKkanbu}
							>
								{!isKkanbu ? "깐부" : "깐부 취소"}
							</RequestButton>
						)}
					</ButtonGrid>
				)}
			</Profile>
			<InfoList>
				<Info>
					<StyledSpan>
						게시물
						<StyledNumber>{userInfo.post_count}</StyledNumber>
					</StyledSpan>
				</Info>
				<Info>
					<StyledLink
						onClick={() =>
							dispatch(openFollowModal("follower", userInfo.user_id))
						}
					>
						팔로워
						<StyledNumber>{userInfo.follower_count}</StyledNumber>
					</StyledLink>
				</Info>
				<Info>
					<StyledLink
						onClick={() =>
							dispatch(openFollowModal("following", userInfo.user_id))
						}
					>
						팔로잉
						<StyledNumber>{userInfo.following_count}</StyledNumber>
					</StyledLink>
				</Info>
				{isMe && (
					<Info>
						<StyledLink
							onClick={() =>
								dispatch(openFollowModal("kkanbu", userInfo.user_id))
							}
						>
							깐부
							<StyledNumber>{userInfo.subscribing_count}</StyledNumber>
						</StyledLink>
					</Info>
				)}
			</InfoList>
			<Details>
				{userInfo.introduce ? (
					<p>userInfo.introduce</p>
				) : (
					<p>소개글이 없습니다.</p>
				)}
			</Details>
		</ProfileSection>
	);
};

export default ProfileInfo;

const StyledLink = styled.a`
	cursor: pointer;
`;

const ProfileSection = styled.section`
	display: flex;
	width: 60%;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	flex-shrink: 1;
	flex-direction: column;
	justify-content: left;
`;

const Profile = styled.div`
	display: flex;
	margin-bottom: 3px;
`;

const StyledH2 = styled.h2`
	font-size: 28px;
	font-weight: 300;
	line-height: 32px;
	margin: -5px 0 -6px;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	display: block;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const ButtonGrid = styled.div`
	display: flex;
	margin-left: 3%;
	gap: 10px;
`;

const InfoList = styled.ul`
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	padding: 0px;
`;

const Info = styled.li`
	font-size: 16px;
	margin-right: 40px;
	list-style: none;
`;

const Details = styled.div`
	font-size: 16px;
	line-height: 24px;
	word-wrap: break-word;
	display: flex;
	word-break: break-all;
`;
