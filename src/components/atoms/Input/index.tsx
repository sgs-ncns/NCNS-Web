import React, { FC, useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	width: 250px;
	height: 30px;
	border: 1px solid #ced4da;
	border-radius: 2px;
	font-size: 11px;
	background-color: #f8f9fa;
`;

interface inputProps {
	option: string;
	placeHolder: string;
}

const Input: FC<inputProps> = ({ option, placeHolder }) => {
	const [value, setValue] = useState("");

	const textHandler = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setValue(e.target.value);
	};

	return (
		<StyledInput
			type={option}
			placeholder={placeHolder}
			onChange={textHandler}
		/>
	);
};

export default Input;
