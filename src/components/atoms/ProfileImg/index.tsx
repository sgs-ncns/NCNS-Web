import React, { FunctionComponent } from "react";
import styled from "styled-components";
import profile from "static/imgs/default_profile.jpg";

type profileType = {
	src?: string;
	size: "small" | "middle" | "big";
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
	}
	console.log(size);
};

const StyledImg = styled.img<profileType>`
	width: ${(props) => profileImgSize(props.size)};
	height: ${(props) => profileImgSize(props.size)};
`;
