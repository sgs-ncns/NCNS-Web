import React, { useState } from "react";
import styled from "styled-components";
import Image from "components/atoms/Image";
import ProfileInfo from "components/molecules/ProfileInfo";
import { useParams } from "react-router-dom";

// 프로필 페이지를 가게 되면 위쪽에 뜨는 헤더 부분입니다.
// Body 파트는 Contents 컴포넌트를 재사용 하였습니다.

const ProfileHeader = () => {
	return (
		<StyledHeader>
			<ImageGrid>
				<Image category={"circle"} width="150px" />
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
