import ButtonIcon from "components/molecules/ButtonIcon";
import Icon from "components/atoms/Icon";
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Count from "components/atoms/Count";
import { sendLike, sendUnlike } from "lib/request/like";

interface ToolProps {
	likeCount?: number;
	id: string;
	isLiked?: boolean;
}

const FeedTool: FunctionComponent<ToolProps> = (props) => {
	const { likeCount = 1000, id, isLiked = false } = props;
	const [liked, setLiked] = useState(isLiked);

	const likeCallback = () => {
		//like false로 만들어주기
		setLiked(true);
	};

	const unlikeCallback = () => {
		//like false로 만들어주기
		setLiked(false);
	};

	return (
		<div>
			<StyledSection>
				{liked ? (
					<ButtonIcon
						category="icon"
						name="Like"
						hover={true}
						onClick={() => sendUnlike(id, unlikeCallback)}
					/>
				) : (
					<ButtonIcon
						category="icon"
						name="LikeFilledRed"
						hover={false}
						onClick={() => sendLike(id, likeCallback)}
					/>
				)}
				<ButtonIcon
					category="icon"
					name="Comment"
					hover={true}
					onClick={() => console.log("모달 창 열기")}
				/>
			</StyledSection>
			<StyledDiv>
				<Count title={"좋아요"} number={likeCount} />
			</StyledDiv>
		</div>
	);
};

export default FeedTool;

const StyledSection = styled.section`
	background: #ffffff;
	display: grid;
	grid-template-columns: 25px 25px;
	grid-column-gap: 1em;
	justify-contents: center;
	margin: 16px 0px 0px;
	padding: 6px 16px 8px;
`;

const StyledDiv = styled.div`
	padding-left: 20px;
	margin-bottom: 10px;
`;
