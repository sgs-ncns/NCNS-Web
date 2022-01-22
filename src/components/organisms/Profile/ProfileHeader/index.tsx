import React, { useState } from "react";
import styled from "styled-components";
import Image from "components/atoms/Image";
import ProfileInfo from "components/molecules/ProfileInfo";
import { useParams } from "react-router-dom";

const ProfileHeader = () => {
	return (
		<StyledHeader>
			<ImageGrid>
				<Image category={"circle"} width="150px"></Image>
			</ImageGrid>
			<ProfileInfo />
		</StyledHeader>
	);
};

export default ProfileHeader;

const StyledHeader = styled.header`
	border: 1px solid black;
	display: flex;
	margin-bottom: 44px;
	box-orient: horizontal;
	box-direction: normal;
	flex-direction: row;
`;

const ImageGrid = styled.div`
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
	margin: 0px 30px 0px 0px;
	justify-content: center;
`;
