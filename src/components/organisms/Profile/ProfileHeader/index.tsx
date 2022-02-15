import React, { useState } from "react";
import styled from "styled-components";
import Image from "components/atoms/Image";
import ProfileInfo from "components/molecules/ProfileInfo";

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
