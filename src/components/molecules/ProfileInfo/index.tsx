import RequestButton from "components/atoms/RequestButton";
import {
	StyledNumber,
	StyledSpan,
} from "components/organisms/Search/SearchHeader";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProfileInfo() {
	const userName = useParams();
	const [valid, setValid] = useState(true);

	const followerModal = () => {
		console.log("팔로워 서버 요청 후 모달 띄우기");
	};

	const followModal = () => {
		console.log("팔로우 서버 요청 후 모달 띄우기");
	};

	const requestFollow = () => {
		console.log("서버로 팔로우 요청 보내기");
		setValid(!valid);
	};
	return (
		<ProfileSection>
			<Profile>
				<StyledH2>{userName.id}</StyledH2>
				<RequestButton
					type={"button"}
					primary={false}
					height="30px"
					onClick={requestFollow}
					valid={valid}
				>
					{valid ? "팔로우" : "팔로우 취소"}
				</RequestButton>
			</Profile>
			<InfoList>
				<Info>
					<StyledSpan>
						게시물
						<StyledNumber>725</StyledNumber>
					</StyledSpan>
				</Info>
				<Info>
					<StyledLink onClick={followerModal}>
						팔로워
						<StyledNumber>1.5백만</StyledNumber>
					</StyledLink>
				</Info>
				<Info>
					<StyledLink onClick={followModal}>
						팔로우
						<StyledNumber>888</StyledNumber>
					</StyledLink>
				</Info>
			</InfoList>
			<Details>
				Erik Lamela Twitter @ErikLamela www.facebook.com/Eriklamelacoco
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
	flex-basis: 30px;
	flex-grow: 3;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	flex-shrink: 1;
	flex-direction: column;
	justify-content: left;
`;

const Profile = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

const StyledH2 = styled.h2`
	font-size: 28px;
	font-weight: 300;
	line-height: 32px;
	margin: -5px 0 -6px;
	color: rgba(var(--i1d, 38, 38, 38), 1);
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
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
	display: block;
`;
