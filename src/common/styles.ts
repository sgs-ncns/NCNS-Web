import styled from "styled-components";

export const DropdownContainer = styled.div`
	width: 25px;
	height: 25px;
	display: flex;
	justify-content: center;
	&:hover {
		cursor: pointer;
	}
`;

export const Divider = styled.hr`
	background-color: #dbdbdb;
`;

export const LoginBox = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	border: 1px solid #dbdbdb;
	border-radius: 1px;
	margin: 0 0 10px;
	padding: 10px 0;
`;

export const Warning = styled.p`
	color: red;
	margin-top: 0;
	font-size: 11px;
	margin-bottom: 0;
`;
