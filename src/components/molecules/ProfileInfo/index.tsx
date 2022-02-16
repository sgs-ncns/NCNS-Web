import RequestButton from "components/atoms/RequestButton";
import {
	StyledNumber,
	StyledSpan,
} from "components/organisms/Search/SearchHeader";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "reducers";
import styled from "styled-components";

function ProfileInfo() {
	const userName = useParams();
	const [isFollow, setFollow] = useState(true);
	const [isKkanbu, setKkanbu] = useState(true);
	const [isMe, setIsMe] = useState(false);
	const location = useLocation();
	const myAccountName = useSelector(
		(state: RootState) => state.userReducer.accountName,
	);
	const myFollower = useSelector(
		(state: RootState) => state.userReducer.followerCount,
	);
	const myFollowing = useSelector(
		(state: RootState) => state.userReducer.followingCount,
	);
	const myPostCount = useSelector(
		(state: RootState) => state.userReducer.postCount,
	);

	useEffect(() => {
		if (location.pathname.match(myAccountName)) setIsMe(true);
	}, []);

	const followerModal = () => {
		console.log("팔로워 서버 요청 후 모달 띄우기");
	};

	const followModal = () => {
		console.log("팔로우 서버 요청 후 모달 띄우기");
	};

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
				<StyledH2>{userName.id}</StyledH2>
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
						{isMe ? (
							<StyledNumber>{myPostCount}</StyledNumber>
						) : (
							<StyledNumber>725</StyledNumber>
						)}
					</StyledSpan>
				</Info>
				<Info>
					<StyledLink onClick={followerModal}>
						팔로워
						{isMe ? (
							<StyledNumber>{myFollower}</StyledNumber>
						) : (
							<StyledNumber>1.5백만</StyledNumber>
						)}
					</StyledLink>
				</Info>
				<Info>
					<StyledLink onClick={followModal}>
						팔로잉
						{isMe ? (
							<StyledNumber>{myFollowing}</StyledNumber>
						) : (
							<StyledNumber>888</StyledNumber>
						)}
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
}

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
