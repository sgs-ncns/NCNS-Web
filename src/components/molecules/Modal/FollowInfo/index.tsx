import LinkedId from "components/atoms/LinkedId";
import RequestButton from "components/atoms/RequestButton";
import ButtonIcon from "components/molecules/ButtonIcon";
import React from "react";
import styled from "styled-components";

interface FollowProps {
	category?: "follower" | "follow";
	src?: string;
	accountName: string;
}

const FollowInfo = (props: FollowProps) => {
	const { category, src, accountName } = props;
	return (
		<Grid>
			<ProfileImage>
				<ButtonIcon category={"profile"} hover={false} width={"44px"} />
			</ProfileImage>
			<ProfileInfo>
				<LinkedId underline={false}>{accountName}</LinkedId>
			</ProfileInfo>
			<SelectButton>
				<RequestButton type={"button"} primary={false}>
					팔로잉
				</RequestButton>
			</SelectButton>
		</Grid>
	);
};

export default FollowInfo;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	height: 60px;
	border-bottom: 1px solid gray;
	width: 100%;
`;

const ProfileImage = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
`;

const ProfileInfo = styled.div`
	width: 60%;
	display: flex;
	justify-content: left;
	align-items: center;
`;

const SelectButton = styled.div`
	display: flex;
	padding: 3% 0;
	width: 20%;
`;
