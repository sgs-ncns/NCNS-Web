import CommentTab from "components/molecules/Feed/CommentTab";
import FeedBody from "components/molecules/Feed/FeedBody";
import FeedFooter from "components/molecules/Feed/FeedFooter";
import FeedHeader from "components/molecules/Feed/FeedHeader";
import FeedTool from "components/molecules/Feed/FeedTool";
import styled from "styled-components";

// 피드 컴포넌트입니다. 현재는 목업 데이터로 이루어져 있고
// page에서 데이터를 받아와 바인딩 될 예정입니다.
// 바인딩 되는 정보에 따라 props 타입을 줄 예정입니다.

interface FeedProps {
	src: any;
}

const Feed = (props: FeedProps) => {
	const { src } = props;
	return (
		<Wrapper>
			<FeedHeader />
			<FeedBody
				src={src.map((image: { key: string }, index: number) => {
					return (
						"https://sgsncns130837-dev.s3.ap-northeast-2.amazonaws.com/public/" +
						image.key
					);
				})}
			/>
			<FeedTool id="95.seong" />
			<FeedFooter />
			<CommentTab />
		</Wrapper>
	);
};

export default Feed;

const Wrapper = styled.div`
	border: 1px solid #dbdbdb;
	background: white;
`;
