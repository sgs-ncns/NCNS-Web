import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import GoogleOAuth from "components/atoms/GoogleOAuth";
import Image from "components/atoms/Image/index";
import Logo from "static/imgs/logo.png";
import LoginInput from "components/atoms/LoginInput";
import LoginBox from "components/atoms/LoginBox";
import RequestButton from "components/atoms/RequestButton";

const SignUp: FunctionComponent = () => {
	const [active, setActive] = useState<boolean>(false);
	const [id, setId] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<LoginBox>
			<Header>
				<Image category={"rectangle"} src={Logo} width="175px" />
				<StyledMent>
					친구들의 사진을 보려면 <br />
					가입하세요.
				</StyledMent>
			</Header>
			<StyledForm>
				<LoginInput
					type="text"
					placeholder="전화번호, 사용자 이름 또는 이메일"
					onChange={(e) => setId(e.target.value)}
				/>
				<LoginInput
					type="password"
					placeholder="비밀번호"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "20px",
					}}
				>
					<RequestButton
						type={"submit"}
						primary={false}
						width="100%"
						height="30px"
						active={active}
					>
						로그인
					</RequestButton>
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<GoogleOAuth />
				</div>
			</StyledForm>
		</LoginBox>
	);
};

export default SignUp;

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0 0 0;
`;

const StyledMent = styled.h2`
	color: rgba(var(--f52, 142, 142, 142), 1);
	font-size: 17px;
	font-weight: 600;
	line-height: 20px;
	margin: 15px 40px 10px;
	text-align: center;
`;

const StyledForm = styled.form`
	margin-top: 20px;
	display: grid;
	grid-template-rows: repeat(4, 0.6fr);
	grid-gap: 8px;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
