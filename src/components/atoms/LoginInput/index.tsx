import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface InputType {
	type: string;
	placeholder?: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: () => void;
}

const LoginInput: FunctionComponent<InputType> = (props) => {
	const { type, placeholder, onChange, onBlur } = props;
	return (
		<StyledInput
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
		/>
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
