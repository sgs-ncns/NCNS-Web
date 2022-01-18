import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface inputProps {
	category: "login" | "search";
	type?: string;
	placeholder?: string;
}

const Input: FunctionComponent<inputProps> = (props) => {
	const { category, type, placeholder } = props;
	const [value, setValue] = useState("");
	const navigate = useNavigate();

	const textHandler = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setValue(e.target.value);
	};

	const onKeyPress = (e: { key: string }) => {
		if (e.key === "Enter") {
			navigate(`/explore/tags/${value}`);
			// requestSearchData(value);
		}
	};

	const requestSearchData = (value: string) => {
		//라우팅 걸기
		alert(`value ${value}`);
	};
	return (
		<StyledInput
			category={category}
			type={type}
			onChange={textHandler}
			placeholder={placeholder}
			value={value}
			onKeyPress={onKeyPress}
		/>
	);
};

export default Input;

Input.defaultProps = {
	type: "text",
	placeholder: "",
};

const StyledInput = styled.input<inputProps>`
	width: 250px;
	height: 30px;
	border: 1px solid #ced4da;
	border-radius: 2px;
	font-size: 11px;
	background-color: #f8f9fa;
`;
