import FeedBody from "components/molecules/Feed/FeedBody";
import FeedFooter from "components/molecules/Feed/FeedFooter";
import FeedHeader from "components/molecules/Feed/FeedHeader";
import FeedTool from "components/molecules/Feed/FeedTool";
import Comment from "components/molecules/Feed/Comment";
import styled from "styled-components";

function Feed() {
	return (
		<Wrapper>
			<FeedHeader />
			<FeedBody />
			<FeedTool />
			<FeedFooter />
			<Comment />
		</Wrapper>
	);
}

export default Feed;

const Wrapper = styled.div`
	border: 1px solid #dbdbdb;
`;
