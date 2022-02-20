import SearchList from "components/molecules/SearchList";
import React from "react";
import styled from "styled-components";

interface PreviewProps {
	title?: string;
	postCount?: number;
}

const SearchPreview = (props: PreviewProps) => {
	return (
		<Preview>
			<SearchList />
		</Preview>
	);
};

export default SearchPreview;

const Preview = styled.div`
	display: flex;
	width: 375px;
	height: 362px;
	border: 1px solid #dbdbdb;
	overflow-x: hidden;
	overflow-y: auto;
	border-radius: 5px;

	position: absolute;
	margin-top: 45px;
	background: white;
`;
