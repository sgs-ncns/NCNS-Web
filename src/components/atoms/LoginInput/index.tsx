import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface InputType {
	type: string;
	placeholder?: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const LoginInput: FunctionComponent<InputType> = (props) => {
	const { type, placeholder, onChange } = props;
	return (
		<StyledInput
			type={type}
			placeholder={placeholder}
			onChange={onChange}
		></StyledInput>
	);
};

export default LoginInput;

const StyledInput = styled.input`
	padding-left: 5px;
	background: #fafafa;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	width: 268px;
	height: 38px;
	font-size: 12px;
`;
