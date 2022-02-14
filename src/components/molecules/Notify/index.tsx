import React from "react";
import { NavigateFunction } from "react-router-dom";
import styled from "styled-components";
import ButtonIcon from "../ButtonIcon";

interface NotifyProps {
	category: "like" | "comment";
	src?: string;
	children?: any;
	onClick?: VoidFunction;
}

const Notify = (props: NotifyProps) => {
	const { src, children, onClick } = props;
	return (
		<Grid onClick={onClick}>
			<ButtonIcon category={"profile"} hover={false} />
			<Content>{children}</Content>
		</Grid>
	);
};

export default Notify;
const Grid = styled.div`
	padding: 5px 5px;
	display: flex;
	width: 100%;
	border: 1px solid #dbdbdb;
`;
const Content = styled.div`
	word-break: break-all;
	margin-left: 8px;
`;
