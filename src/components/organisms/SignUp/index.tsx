import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import GoogleOAuth from "components/atoms/GoogleOAuth";
import Image from "components/atoms/Image/index";
import Logo from "static/imgs/logo.png";
import SignUpInput from "components/atoms/LoginInput";
import RequestButton from "components/atoms/RequestButton";
import {
	requestDuplicateAccount,
	requestDuplicateEmail,
	sendSignUp,
} from "lib/request/signUp";
import { useNavigate } from "react-router-dom";
import { isEmail } from "utils/format";
import { LoginBox, Warning } from "common/styles";

// 회원가입 컴포넌트입니다. 네 가지의 항목을 입력해야 하며,
// 이메일 계정과 accountName은 중복이 불가능 하므로 포커싱 아웃이 될 때, 중복하는 지를 체크하는 함수를 부릅니다.

const SignUp: FunctionComponent = () => {
	const [active, setActive] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [nickname, setNickname] = useState<string>("");
	const [accountName, setAccountName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [checkEmail, setCheckEmail] = useState<boolean>(true);
	const [isDuplicateEmail, setDuplicateEmail] = useState<boolean>(true);
	const [isDuplicateAccount, setDuplicateAccount] = useState<boolean>(true);
	const navigate = useNavigate();

	// 포커싱 아웃 될 때 불리우는 함수입니다.
	const duplicateHandler = (category: "email" | "accountName"): void => {
		switch (category) {
			case "email":
				email &&
					checkEmail &&
					console.log(
						`서버로 ${email}값으로 요청 보내고 중복 체크한 값 돌려받기`,
					);
				requestDuplicateEmail(email)
					.then((response) => {
						console.log(response.data.data.result);
						if (response.data.data.result === true) setDuplicateEmail(true);
						else setDuplicateEmail(false);
					})
					.catch((err) => {
						console.log(err);
						return;
					});
				break;
			case "accountName":
				accountName &&
					console.log(
						`서버로 ${accountName}값으로 요청 보내고 중복 체크한 값 돌려받기`,
					);
				requestDuplicateAccount(accountName)
					.then((response) => {
						console.log(response.data.data.result);
						if (response.data.data.result === true) setDuplicateAccount(true);
						else setDuplicateAccount(false);
					})
					.catch((err) => {
						console.log(err);
						return;
					});
				break;
			default:
				return;
		}
	};

	// 의존성 배열에 담긴 값들을 전부 판별하여 모두 참일 때만 전송 버튼을 활성화 합니다.
	useEffect(() => {
		if (
			checkEmail &&
			email &&
			accountName &&
			nickname &&
			password &&
			!isDuplicateEmail &&
			!isDuplicateAccount
		)
			setActive(true);
		else setActive(false);
	}, [
		email,
		accountName,
		nickname,
		password,
		checkEmail,
		isDuplicateEmail,
		isDuplicateAccount,
	]);

	// 회원가입 버튼을 누르게 되면, 서버로 보내며 응답코드에 대한 에러 처리 예정입니다.
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
						isEmail(email, (state: boolean) => {
							setCheckEmail(state);
						});
						duplicateHandler("email");
					}}
					//콜백 넣기
				/>
				{!checkEmail && <Warning>잘못된 이메일 형식입니다.</Warning>}
				{isDuplicateEmail && <Warning>중복된 이메일입니다.</Warning>}
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
				{isDuplicateAccount && <Warning>중복된 아이디입니다.</Warning>}
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
