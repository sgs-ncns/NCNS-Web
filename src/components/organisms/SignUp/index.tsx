import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import GoogleOAuth from "components/atoms/GoogleOAuth";
import Image from "components/atoms/Image/index";
import Logo from "static/imgs/logo.png";
import SignUpInput from "components/atoms/LoginInput";
import LoginBox from "components/atoms/LoginBox";
import RequestButton from "components/atoms/RequestButton";
import { sendSignUp } from "lib/request/signUp";
import { useNavigate } from "react-router-dom";
import { emailHandler } from "util/regex";

const SignUp: FunctionComponent = () => {
	const [active, setActive] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [nickname, setNickname] = useState<string>("");
	const [accountName, setAccountName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [checkEmail, setCheckEmail] = useState<boolean>(true);
	const navigate = useNavigate();

	const duplicateHandler = (category: "email" | "accountName"): void => {
		switch (category) {
			case "email":
				email &&
					checkEmail &&
					console.log(
						`서버로 ${email}값으로 요청 보내고 중복 체크한 값 돌려받기`,
					);
				break;
			case "accountName":
				accountName &&
					console.log(
						`서버로 ${accountName}값으로 요청 보내고 중복 체크한 값 돌려받기`,
					);
				break;
			default:
				return;
		}
		//checked 값 가지고 있어야하는가? 각각의 useState마다??
	};

	useEffect(() => {
		if (checkEmail && email && accountName && nickname && password)
			setActive(true);
		else setActive(false);
	}, [email, accountName, nickname, password, checkEmail]);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const res = sendSignUp(email, nickname, accountName, password, () => {
			navigate("/login");
		}).then((res) => console.log(res));
		alert(`${email}, ${accountName}, ${nickname}, ${password}값 서버로 보냄`);
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
			<StyledForm onSubmit={(event) => submitHandler(event)}>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<GoogleOAuth />
				</div>
				{/* <div style={{ border: "1px solid black" }}> */}
				<SignUpInput
					type="text"
					placeholder="이메일 주소"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					onBlur={() => {
						emailHandler(email, (state: boolean) => {
							setCheckEmail(state);
						});
						duplicateHandler("email");
					}}
					//콜백 넣기
				/>
				{!checkEmail && <Warning>잘못된 이메일 형식입니다.</Warning>}
				{/* </div> */}
				<SignUpInput
					type="text"
					placeholder="성명"
					onChange={(e) => setNickname(e.target.value)}
				/>
				<SignUpInput
					type="text"
					placeholder="사용자 이름"
					onChange={(e) => setAccountName(e.target.value)}
					onBlur={() => duplicateHandler("accountName")}
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

const Warning = styled.p`
	color: red;
	margin-top: 0;
	font-size: 11px;
	margin-bottom: 0;
`;
