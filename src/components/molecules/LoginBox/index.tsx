import React, { FunctionComponent } from "react";
import Form from "components/atoms/Form";
import styled from "styled-components";
import Input from "components/atoms/Search/index";
import Button from "components/atoms/Button";
import GoogleOAuth from "components/atoms/GoogleOAuth";
import Image from "components/atoms/Image/index";

const StyledForm = styled(Form)`
	padding-top: 40px;
	padding-bottom: 30px;
`;

const StyledImage = styled(Image)`
	margin-bottom: 10px;
`;

const LoginBox: FunctionComponent = () => {
	return (
		<StyledForm>
			<StyledImage option="logo" />
			<Input placeholder="전화번호, 사용자 이름 또는 이메일" />
			<Input type="password" placeholder="비밀번호" />
			<Button type="submit" primary>
				로그인
			</Button>
			<GoogleOAuth />
		</StyledForm>
	);
};

export default LoginBox;
