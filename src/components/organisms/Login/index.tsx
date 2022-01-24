import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import GoogleOAuth from "components/atoms/GoogleOAuth";
import Image from "components/atoms/Image/index";
import Logo from "static/imgs/logo.png";
import LoginInput from "components/atoms/LoginInput";
import LoginBox from "components/atoms/LoginBox";
import RequestButton from "components/atoms/RequestButton";

const Login: FunctionComponent = () => {
	const [active, setActive] = useState<boolean>(false);
	const [id, setId] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	useEffect(() => {
		if (id && password) setActive(true);
		else setActive(false);
	}, [id, password]);

	const submitHandler = () => {
		alert(`${id}, ${password}값 서버로 보냄`);
	};

	return (
		<LoginBox>
			<Header>
				<Image category={"rectangle"} src={Logo} width="175px" />
			</Header>
			<StyledForm onSubmit={submitHandler}>
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

export default Login;

const StyledForm = styled.form`
	margin-top: 20px;
	display: grid;
	grid-template-rows: repeat(4, 0.6fr);
	grid-gap: 8px;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Header = styled.header`
	display: flex;
	justify-content: center;
	padding: 20px 0 10px 0;
`;
