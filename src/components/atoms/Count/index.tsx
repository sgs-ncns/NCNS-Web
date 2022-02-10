import React from "react";
import styled from "styled-components";

interface CountProps {
	title: string;
	number: number;
}

/*제목과 숫자를 받아 숫자는 1000단위로 콤마를 찍어주는 로직을 포함하고 있습니다.
숫자는 1000단위 콤마가 찍혀서 반환됩니다. */

const Count = (props: CountProps) => {
	const { title, number } = props;

	return (
		<StyledSpan>
			{title}
			<StyledNumber>{number.toLocaleString()}</StyledNumber>
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
