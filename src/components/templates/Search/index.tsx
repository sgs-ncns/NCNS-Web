import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface SearchProps {
	navbar?: React.ReactNode;
	header: React.ReactNode;
	article: React.ReactNode;
}

const SearchTemplate: FunctionComponent<SearchProps> = (props) => {
	const { navbar, header, article } = props;
	return (
		<Grid>
			<NavBar>{navbar && <>{navbar}</>}</NavBar>
			<Main>
				<Header>{header && <>{header}</>}</Header>
				<Article>{article && <>{article}</>}</Article>
			</Main>
		</Grid>
	);
};

export default SearchTemplate;

const Grid = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const NavBar = styled.div`
	position: sticky;
	top: 0px;
	z-index: 10;
`;

const Main = styled.main`
	display: block;
	background-color: rgba(var(--b3f, 250, 250, 250), 1);
`;

const Header = styled.div`
	display: block;
`;

const Article = styled.article`
	display: flex;
	justify-content: center;
`;
