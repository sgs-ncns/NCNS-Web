import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface ModalProps {
	children: React.ReactNode | string;
}

const Modal: FunctionComponent = (props) => {
	const { children } = props;
	return <StyledDiv>hello</StyledDiv>;
};

export default Modal;

const StyledDiv = styled.div`
	width: 580px;
	height: 580px;
`;
