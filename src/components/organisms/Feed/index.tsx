import CommentTab from "components/molecules/Feed/CommentTab";
import FeedBody from "components/molecules/Feed/FeedBody";
import FeedFooter from "components/molecules/Feed/FeedFooter";
import FeedHeader from "components/molecules/Feed/FeedHeader";
import FeedTool from "components/molecules/Feed/FeedTool";
import styled from "styled-components";

interface FeedProps {
	src: any;
}

const Feed = (props: FeedProps) => {
	const { src } = props;
	return (
		<Wrapper>
			<FeedHeader />
			<FeedBody src={src} />
			<FeedTool id="95.seong" />
			<FeedFooter />
			<CommentTab />
		</Wrapper>
	);
};

export default Feed;

const Wrapper = styled.div`
	border: 1px solid #dbdbdb;
`;
