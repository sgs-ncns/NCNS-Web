import ButtonIcon from "components/molecules/ButtonIcon";
import Icon from "components/atoms/Icon";
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Count from "components/atoms/Count";
import { sendLike, sendUnlike } from "lib/request/like";
import { useSelector } from "react-redux";
import { RootState } from "reducers";

// 하트와 댓글창을 눌러 모달을 켤 수 있는 기능을 담고 있습니다.
// 하트를 누르게 되면 콜백 함수를 통해 liked 값을 변경시키며
// 어떤 하트를 내보낼지 결정됩니다.

interface ToolProps {
	likeCount?: number;
	accountName: string;
	postId: number;
	isLiked?: boolean;
}

const FeedTool: FunctionComponent<ToolProps> = (props) => {
	const { likeCount = 1000, isLiked = false, accountName, postId } = props;
	const [liked, setLiked] = useState(isLiked);
	const myAccountName = useSelector(
		(state: RootState) => state.userReducer.accountName,
	);

	return (
		<div>
			<StyledSection>
				{liked ? (
					<ButtonIcon
						category="icon"
						name="LikeFilledRed"
						hover={true}
						onClick={() =>
							sendLike(accountName, postId, myAccountName, () => {
								setLiked(false);
							})
						}
					/>
				) : (
					<ButtonIcon
						category="icon"
						name="Like"
						hover={false}
						onClick={() =>
							sendLike(accountName, postId, myAccountName, () => {
								setLiked(true);
							})
						}
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
