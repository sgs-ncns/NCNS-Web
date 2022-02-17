import RequestButton from "components/atoms/RequestButton";
import {
	StyledNumber,
	StyledSpan,
} from "components/organisms/Search/SearchHeader";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "reducers";
import { openFollowModal } from "reducers/followModalReducer";
import styled from "styled-components";

interface ProfileInfo {
	isMe: boolean;
	accountName: string;
	userId: number;
	postCount: number;
	followerCount: number;
	followingCount: number;
	followStatus?: boolean;
	subscribeStatus?: boolean;
}

const ProfileInfo = (props: ProfileInfo) => {
	const {
		isMe,
		accountName,
		userId,
		postCount,
		followerCount,
		followingCount,
		followStatus = false,
		subscribeStatus = false,
	} = props;
	console.log("props", props);
	const [isFollow, setFollow] = useState(true);
	const [isKkanbu, setKkanbu] = useState(true);
	const dispatch = useDispatch();

	const requestFollow = () => {
		console.log("서버로 팔로우 요청 보내기");
		setFollow(!isFollow);
	};

	const requestKkanbu = () => {
		console.log("서버로 깐부 요청 보내기");
		setKkanbu(!isKkanbu);
	};

	return (
		<ProfileSection>
			<Profile>
				<StyledH2>{accountName}</StyledH2>
				{!isMe && (
					<ButtonGrid>
						<RequestButton
							type={"button"}
							primary={false}
							height="30px"
							onClick={requestFollow}
							valid={isFollow}
						>
							{isFollow ? "팔로우" : "팔로우 취소"}
						</RequestButton>
						<RequestButton
							type={"button"}
							kkanbu={true}
							height="30px"
							onClick={requestKkanbu}
							valid={isKkanbu}
						>
							{isKkanbu ? "깐부" : "깐부 취소"}
						</RequestButton>
					</ButtonGrid>
				)}
			</Profile>
			<InfoList>
				<Info>
					<StyledSpan>
						게시물
						<StyledNumber>{postCount}</StyledNumber>
					</StyledSpan>
				</Info>
				<Info>
					<StyledLink
						onClick={() => dispatch(openFollowModal("follower", userId))}
					>
						팔로워
						<StyledNumber>{followerCount}</StyledNumber>
					</StyledLink>
				</Info>
				<Info>
					<StyledLink
						onClick={() => dispatch(openFollowModal("following", userId))}
					>
						팔로잉
						<StyledNumber>{followingCount}</StyledNumber>
					</StyledLink>
				</Info>
			</InfoList>
			<Details>
				Erik Lamela Twitter @ErikLamela www.facebook.com/EriklamelacocoErik
				Lamela Twitter @ErikLamela www.facebook.com/EriklamelacocoErik Lamela
				Twitter @ErikLamela www.facebook.com/Eriklamelacoco
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
