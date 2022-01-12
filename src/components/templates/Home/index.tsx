import React, { FunctionComponent } from "react";
import styled from "styled-components";

type HomeProps = {
	navbar?: React.ReactNode;
};

const Home: FunctionComponent<HomeProps> = (props) => {
	const { navbar } = props;
	return (
		<Grid>
			<Header>{navbar && <>{navbar}</>}</Header>
			<Body>
				<StyledSection>
					<FeedLayout>
						<Story>story</Story>
						<Article>hee</Article>
					</FeedLayout>
					<SideBar>hee</SideBar>
				</StyledSection>
			</Body>
		</Grid>
	);
};

export default Home;

const Grid = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const Header = styled.div`
	position: sticky;
	top: 0px;
	z-index: 10;
`;

const Body = styled.main`
	background: #fafafa;
	display: flex;
	align-items: stretch;
	position: relative;
	justify-content: center;
`;

const StyledSection = styled.section`
	align-items: stretch;
	padding: 30px 0px 0px;
	width: 935px;
	display: flex;
`;

const FeedLayout = styled.div`
	margin: 0px 28px 0px 0px;
	display: flex;
	vertical-align: baseline;
	width: 614px;
	flex-direction: column;
`;

const Story = styled.div`
	display: block;
	overflow-y: hidden;
	border-radius: 3px;
	height: 84px;
	margin: 0 0 24px;
	padding: 16px 0;
	background: #ffffff;
	border: 1px solid #dbdbdb;
`;

const Article = styled.article`
	height: 1000px;
	border: 1px solid green;
	width: 614px;
`;

const SideBar = styled.div`
	margin: 0px 0px 30px;
	width: 293px;
	border: 1px solid black;
	position: sticky;
	top: 0px;
`;

const StyledWrapper = styled.div`
	display: flex;
	background: #fafafa;
	justify-content: center;
`;

const Grid1 = styled.div`
	max-width: 935px;
	display: grid;
	grid-template-areas:
		"story sidebar"
		"feed sidebar";
	border: 1px solid black;
	padding: 30px 0px 0px;
`;

const FirstItem = styled.div`
	grid-area: story;
	width: 614px;
	height: 84px;
	margin: 0px 0px 24px;
	padding: 16px 0px;
	border: 1px solid blue;
`;
const SecondItem = styled.div`
	grid-area: feed;
	width: 614px;
	height: 1000px;
	margin: 0px 28px 0px 0px;
	border: 1px solid black;
`;
const ThirdItem = styled.div`
	grid-area: sidebar;
	width: 293px;
	border: 1px solid green;
`;

//max-width로 바꾸기
//flex direction ???margin: 0px 0px 30px;
