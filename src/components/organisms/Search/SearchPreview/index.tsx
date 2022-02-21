import { StyledLink } from "common/styles";
import SearchList from "components/molecules/SearchList";
import {
	globalSearchType,
	hashtagSearchType,
	userSearchType,
} from "lib/request/search";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface PreviewProps {
	searchData: Array<globalSearchType>;
	isSelected: boolean;
}

const SearchPreview = (props: PreviewProps) => {
	const { searchData, isSelected } = props;

	console.log(isSelected);
	return (
		<Preview>
			{searchData &&
				searchData.map((data, index) => {
					if (isSelected && index === 0) {
						if (data.hashtag) {
							return (
								<StyledLink to={`/explore/tags/${data.hashtag.content}`}>
									<SearchList
										category="hashtag"
										title={data.hashtag.content}
										content={data.hashtag.count}
										isSelected={true}
									/>
								</StyledLink>
							);
						} else {
							return (
								<StyledLink to={`/${data.user.account_name}`}>
									<SearchList
										category="user"
										title={data.user.account_name}
										content={data.user.nickname}
										isSelected={true}
									/>
								</StyledLink>
							);
						}
					} else {
						if (data.hashtag) {
							return (
								<StyledLink to={`/explore/tags/${data.hashtag.content}`}>
									<SearchList
										category="hashtag"
										title={data.hashtag.content}
										content={data.hashtag.count}
									/>
								</StyledLink>
							);
						} else {
							return (
								<StyledLink to={`/${data.user.account_name}`}>
									<SearchList
										category="user"
										title={data.user.account_name}
										content={data.user.nickname}
									/>
								</StyledLink>
							);
						}
					}
				})}
		</Preview>
	);
};

export default SearchPreview;

const Preview = styled.div`
	display: flex;
	flex-direction: column;
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
