import ImgUploadBox from "components/molecules/ImgUploadBox";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import styled, { css } from "styled-components";

type HomeProps = {
	navbar?: React.ReactNode;
	feed: React.ReactNode;
	sidebar?: React.ReactNode;
};

const Home: FunctionComponent<HomeProps> = (props) => {
	const { navbar, feed, sidebar } = props;
	const pageWidth = useSelector(
		(state: RootState) => state.pageWidthReducer.width,
	);
	const ref = useRef();
	console.log(sidebar, navbar);

	useEffect(() => {
		console.log(pageWidth > 1000);
	}, [pageWidth]);

	return (
		<Grid>
			<Header>{navbar && <>{navbar}</>}</Header>
			<Body>
				<StyledSection pageWidth={pageWidth}>
					<FeedLayout ref={ref}>
						<Article>{feed && <>{feed}</>}</Article>
					</FeedLayout>
					{pageWidth > 1000 && (
						<ImgUploadBar pageWidth={pageWidth}>
							{sidebar && <>{sidebar}</>}
						</ImgUploadBar>
					)}
				</StyledSection>
			</Body>
		</Grid>
	);
};

export default Home;

const Grid = styled.section`
	display: flex;
	flex-direction: column;
`;

const Header = styled.div`
	position: sticky;
	top: 0px;
	z-index: 10;
`;

const Body = styled.main`
	background: #fafafa;
	display: flex;
	height: auto;
`;

const StyledSection = styled.section<{ pageWidth: number }>`
	align-items: stretch;
	padding-top: 30px;
	padding-left: calc((100% - 927px) * 1 / 2);
	display: flex;
	width: 100%;

	${(props) =>
		props.pageWidth <= 1000 &&
		css`
			padding-left: 0;
			justify-content: center;
		`}
`;
// justify-content: center;

const FeedLayout = styled.div`
	height: auto;
	display: flex;
	position: relative;
	max-width: 614px;
	flex-direction: column;
`;

const Article = styled.article`
	width: 614px;
`;

const ImgUploadBar = styled.div<{ pageWidth: number }>`
	margin: 0px 0px 30px;
	width: 293px;
	height: 80%;
	position: fixed;
	z-index: 1;
	left: calc((100% - 927px) * 1 / 2 + 634px);
`;
