import React, { FunctionComponent } from "react";
import Form from "components/atoms/Form";
import styled from "styled-components";
import Input from "components/atoms/Input/index";
import Button from "components/atoms/Button";
import GoogleOAuth from "components/atoms/GoogleOAuth";
import Image from "components/atoms/Image/index";

const StyledForm = styled(Form)`
	padding-top: 40px;
	padding-bottom: 30px;
`;

const StyledInput = styled(Input)`
	margin-top: 5px;
	margin-bottom: 5px;
`;

const StyledImage = styled(Image)`
	margin-bottom: 10px;
`;

const LoginBox: FunctionComponent = () => {
	return (
		<StyledForm>
			<StyledImage option="logo" />
			<StyledInput
				option="text"
				placeHolder="전화번호, 사용자 이름 또는 이메일"
			/>
			<StyledInput option="password" placeHolder="비밀번호" />
			<Button type="submit" primary>
				로그인
			</Button>
			<GoogleOAuth />
		</StyledForm>
	);
};

export default LoginBox;
