import LinkedId from "components/atoms/LinkedId";
import React from "react";
import styled from "styled-components";
import ButtonIcon from "../ButtonIcon";

// 모달 창들에 나타나게 되는 comment입니다. 재사용을 예상했지만 재사용 되지 않으면
// 피드 파트에 합쳐질 예정입니다.

export type CommentType = {
	account_name: string;
	content: string;
	created_at: string;
	id: number;
	parent_id: number;
	user_id: number;
};

interface CommentProps {
	accountName: string;
	content: string;
}

const Comment = (props: CommentProps) => {
	const { accountName, content } = props;
	return (
		<Grid>
			<ButtonIcon category={"profile"} hover={true} />
			<ContentGrid>
				<LinkedId underline={false}>{accountName}</LinkedId>
				<div style={{ marginLeft: "10px" }}>{content}</div>
			</ContentGrid>
		</Grid>
	);
};

export default Comment;

const Grid = styled.div`
	display: flex;
	gap: 10px;
`;

const ContentGrid = styled.span`
	display: flex;
	width: 100%;
	word-break: break-all;
`;
