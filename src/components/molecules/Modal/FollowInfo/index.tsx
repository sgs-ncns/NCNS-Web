import LinkedId from "components/atoms/LinkedId";
import RequestButton from "components/atoms/RequestButton";
import ButtonIcon from "components/molecules/ButtonIcon";
import React from "react";
import styled from "styled-components";

interface FollowProps {
	category?: "follower" | "follow";
	src?: string;
	accountName: string;
	nickName: string;
	onClick: () => void;
}

const FollowInfo = (props: FollowProps) => {
	const { category, src, accountName, nickName, onClick } = props;
	return (
		<Grid onClick={onClick}>
			<ProfileImage>
				<ButtonIcon category={"profile"} hover={false} width={"44px"} />
			</ProfileImage>
			<ProfileInfo>
				<LinkedId underline={false}>{accountName}</LinkedId>
			</ProfileInfo>
			<NickInfo>
				<p>{nickName}</p>
			</NickInfo>
		</Grid>
	);
};

export default FollowInfo;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	height: 60px;
	border-bottom: 1px solid gray;
	width: 90%;
	border: 1px solid gray;
	border-radius: 5px;
`;

const ProfileImage = styled.div`
	width: 30%;
	display: flex;
	justify-content: center;
`;

const ProfileInfo = styled.div`
	width: 40%;
	display: flex;
	justify-content: left;
	align-items: center;
`;

const NickInfo = styled.div`
	display: flex;
	padding: 3% 0;
	width: 60%;
	align-items: center;
	color: lightgray;
`;
