import React, { FunctionComponent } from "react";
import styled from "styled-components";
import profile from "static/imgs/default_profile.jpg";

// 초창기에 만든 컴포넌트로 이 부분은 상위 컴포넌트에서 Image를 감싸는 div를 만드는 것으로 구현될 파트입니다.
// 리팩토링을 하게 된다면 사라질 컴포넌트입니다.

type profileType = {
	src?: string;
	size: "small" | "middle" | "big" | "search";
};

const ProfileImg: FunctionComponent<profileType> = (props) => {
	const { src, size } = props;
	return <StyledImg src={src} size={size} />;
};

ProfileImg.defaultProps = {
	src: profile,
};

export default ProfileImg;

const profileImgSize = (size: string) => {
	switch (size) {
		case "small":
			return "24px";
		case "middle":
			return "32px";
		case "big":
			return "56px";
		case "search":
			return "152px";
	}
};

const StyledImg = styled.img<profileType>`
	width: ${(props) => profileImgSize(props.size)};
	height: ${(props) => profileImgSize(props.size)};
`;
