import createAxios from "common/createAxios";
import { GET_USER_PROFILE_INFO } from "common/url";
import ImgUploadBox from "components/molecules/ImgUploadBox";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import styled, { css } from "styled-components";

//홈페이지의 레이아웃을 정한 부분입니다.

type HomeProps = {
	navbar?: React.ReactNode;
	feed: React.ReactNode;
	sidebar?: React.ReactNode;
	children?: React.ReactNode;
	isPicture?: boolean;
};

const Home: FunctionComponent<HomeProps> = (props) => {
	const { navbar, feed, sidebar, children, isPicture } = props;
	// 페이지마다 반응형이 다르고 기기에 따른 값이 아니게 반응하기 위해 reducer로 전체 페이지 width를 관리 해보았습니다.
	// 자세한 부분은 reducer 부분에서 설명 드리도록 하겠습니다.
	const pageWidth = useSelector(
		(state: RootState) => state.pageWidthReducer.width,
	);

	return (
		<Grid>
			<Header>{navbar && <>{navbar}</>}</Header>
			{children && <>{children}</>}
			<Body>
				<StyledSection pageWidth={pageWidth} category={isPicture}>
					<FeedLayout category={isPicture}>
						<Article>{feed && <>{feed}</>}</Article>
					</FeedLayout>
					{!isPicture && pageWidth > 1000 && (
						<ImgUploadBar>{sidebar && <>{sidebar}</>}</ImgUploadBar>
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
	display: flex;
	height: auto;
	background: #fafafa;
`;

const StyledSection = styled.section<{ pageWidth: number; category: boolean }>`
	display: flex;
	width: 100%;

	${(props) =>
		props.pageWidth <= 1000 &&
		css`
			padding-left: 0;
			justify-content: center;
		`}

	${(props) =>
		props.category
			? css`
					justify-content: center;
			  `
			: css`
					align-items: stretch;
					padding-left: calc((100% - 927px) * 1 / 2);
			  `}
`;
// justify-content: center;

const FeedLayout = styled.div<{ category: boolean }>`
	height: auto;
	display: flex;
	position: relative;
	width: 614px;
	flex-direction: column;
	${(props) =>
		props.category &&
		css`
			width: 80%;
			justify-content: center;
		`};
`;

const Article = styled.article`
	width: 100%;
`;

const ImgUploadBar = styled.div`
	margin: 0px 0px 30px;
	width: 293px;
	height: 80%;
	position: fixed;
	z-index: 1;
	left: calc((100% - 927px) * 1 / 2 + 634px);
`;
