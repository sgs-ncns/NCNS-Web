import React, {
	FunctionComponent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import styled from "styled-components";
import GoogleOAuth from "components/atoms/GoogleOAuth";
import Image from "components/atoms/Image/index";
import Logo from "static/imgs/logo.png";
import LoginInput from "components/atoms/LoginInput";
import RequestButton from "components/atoms/RequestButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "router/auth";
import { LoginBox, Warning } from "common/styles";
import { checkValidId } from "utils/format";

// 로그인 파트입니다. 로그인 버튼은 아이디 값과 비밀번호 값이 차 있을 때 활성화되며
// 로그인 버튼을 누르게 되면, 유효한 id인지 체크하는 함수를 실행하고 콜백 함수로 돌아와
// 홈 피드로 보내주게 됩니다.

const Login: FunctionComponent = () => {
	const [active, setActive] = useState<boolean>(false);
	const [id, setId] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isValidId, setIsValidId] = useState<boolean>(true);
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (id && password && isValidId) setActive(true);
	}, [id, password, isValidId]);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		auth.signin(id, password, () => {
			navigate("/", { replace: true });
		});
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
					onBlur={() =>
						id &&
						checkValidId(id, (isValid: boolean) => {
							isValid ? setIsValidId(true) : setIsValidId(false);
						})
					}
				/>
				{!isValidId && <Warning>아이디는 영문 혹은 숫자입니다.</Warning>}
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
