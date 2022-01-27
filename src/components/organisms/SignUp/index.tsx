import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import GoogleOAuth from "components/atoms/GoogleOAuth";
import Image from "components/atoms/Image/index";
import Logo from "static/imgs/logo.png";
import SignUpInput from "components/atoms/LoginInput";
import LoginBox from "components/atoms/LoginBox";
import RequestButton from "components/atoms/RequestButton";

const SignUp: FunctionComponent = () => {
	const [active, setActive] = useState<boolean>(false);
	const [id, setId] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const requestDuplicate = (): void => {
		console.log(`서버로 ${id}값으로 요청 보내고 중복 체크한 값 돌려받기`);
		//checked 값 가지고 있어야하는가? 각각의 useState마다??
	};

	useEffect(() => {
		if (id && name && username && password) setActive(true);
		else setActive(false);
	}, [id, name, username, password]);

	const submitHandler = () => {
		alert(`${id}, ${name}, ${username}, ${password}값 서버로 보냄`);
	};

	return (
		<LoginBox>
			<Header>
				<Image category={"rectangle"} src={Logo} width="175px" />
				<StyledMent>
					친구들의 사진을 보려면 <br />
					가입하세요.
				</StyledMent>
			</Header>
			<StyledForm onSubmit={submitHandler}>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<GoogleOAuth />
				</div>
				<SignUpInput
					type="text"
					placeholder="휴대폰 번호 또는 이메일 주소"
					onChange={(e) => {
						setId(e.target.value);
						console.log(id);
					}}
					onBlur={id && requestDuplicate}
				/>
				<SignUpInput
					type="text"
					placeholder="성명"
					onChange={(e) => setName(e.target.value)}
				/>
				<SignUpInput
					type="text"
					placeholder="사용자 이름"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<SignUpInput
					type="password"
					placeholder="비밀번호"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "10px",
					}}
				>
					<RequestButton
						type={"submit"}
						primary={false}
						width="100%"
						height="30px"
						active={active}
					>
						가입
					</RequestButton>
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
	display: grid;
	grid-template-rows: repeat(4, 0.6fr);
	grid-gap: 8px;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;
`;
