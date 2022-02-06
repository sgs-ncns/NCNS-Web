import React from "react";
import styled from "styled-components";

interface CountProps {
	title: string;
	number: number;
}

const Count = (props: CountProps) => {
	const { title, number } = props;

	const numberHandler = (number: number): string => {
		const numToString = number.toString();
		let from = numToString.length;
		console.log(numToString.substring(0, from));
		let result = "";
		for (let i = from; i > 0; i--) {
			if (i % 3 === 0) {
				const to = i;
				result = "," + numToString.substring(to - 1, from) + result;
				from = i - 1;
			}
			if (i < 3) {
				result = numToString.substring(0, from) + result;
				break;
			}
		}
		console.log(result);
		return result;
	};

	return (
		<StyledSpan>
			{title}
			<StyledNumber>{numberHandler(number)}</StyledNumber>
			{/* 개수 받아와서 수정하기 */}
		</StyledSpan>
	);
};

export default Count;

export const StyledSpan = styled.span`
	margin-top: 10px;
	margin-bottom: 20px;
`;

export const StyledNumber = styled.span`
	margin-left: 10px;
	font-weight: 600;
`;
