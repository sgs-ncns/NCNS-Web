import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import styled from "styled-components";

type HomeProps = {
	navbar?: React.ReactNode;
	feed: React.ReactNode;
};

const Home: FunctionComponent<HomeProps> = (props) => {
	const pageWidth = useSelector(
		(state: RootState) => state.pageWidthReducer.width,
	);
	const { navbar, feed } = props;

	useEffect(() => {
		console.log(pageWidth > 1000);
	}, [pageWidth]);

	return (
		<Grid>
			<Header>{navbar && <>{navbar}</>}</Header>
			<Body>
				<StyledSection>
					<FeedLayout>
						<Article>{feed && <>{feed}</>}</Article>
					</FeedLayout>
					{pageWidth > 1000 && <SideBar>hee</SideBar>}
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
	display: flex;
`;

const FeedLayout = styled.div`
	margin: 0px 28px 0px 0px;
	display: flex;
	vertical-align: baseline;
	width: 614px;
	flex-direction: column;
`;

const Article = styled.article`
	height: 1000px;
	width: 614px;
`;

const SideBar = styled.div`
	margin: 0px 0px 30px;
	width: 293px;
	border: 1px solid black;
	position: sticky;
	top: 0px;
`;

//max-width로 바꾸기
//flex direction ???margin: 0px 0px 30px;
