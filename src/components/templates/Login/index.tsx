import { LoginBox } from "common/styles";
import RequestButton from "components/atoms/RequestButton";
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface TemplateType {
	login?: React.ReactNode;
	signUp?: React.ReactNode;
}

const LoginTemplate: FunctionComponent<TemplateType> = (props) => {
	const { login = null, signUp = null } = props;
	const navigate = useNavigate();
	const changePage = () => {
		login ? navigate("/account/emailSignUp") : navigate("/login");
	};
	return (
		<Wrapper>
			{login ? <>{login}</> : <>{signUp}</>}
			<StyledRoute>
				<StyledText>
					{login ? "계정이 없으신가요?" : "계정이 있으신가요?"}
				</StyledText>
				<RequestButton type={"button"} onClick={changePage}>
					{login ? "가입하기" : "로그인"}
				</RequestButton>
			</StyledRoute>
		</Wrapper>
	);
};

export default LoginTemplate;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: rgba(var(--b3f, 250, 250, 250), 1);
`;

const StyledRoute = styled(LoginBox)`
	flex-direction: row;
`;

const StyledText = styled.p`
	color: #262626;
	font-size: 14px;
	text-align: center;
`;
