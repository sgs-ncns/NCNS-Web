import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "components/atoms/Image";
import { userPostsType } from "lib/request/type";
import { requestImages, S3_ADDRESS } from "utils/amplify";
import { openModal } from "reducers/modalReducer";
import { useDispatch } from "react-redux";
import { SearchType } from "pages/Search";

// 검색뷰와 프로필의 그리드 뷰입니다.
// 같이 사용할 수 있을 것 같아서 category를 두고
// 인기 게시물을 표시하고 안하고의 여부에 대한 생각을 담았습니다.

interface ContentType {
	category: "search" | "profile";
	popular?: Array<string>;
	posts: Array<userPostsType> | Array<SearchType>;
}

const Contents: FunctionComponent<ContentType> = (props) => {
	const { category, popular, posts } = props;
	const [contents, setContents] = useState<Array<string>>([]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (posts) {
			const asyncLoop = async () => {
				const newContents = posts.map(async (value) => {
					return await requestImages(value.user_id, value.image_path, 1).then(
						(res) => S3_ADDRESS + res[0].key,
					);
				});
				const results = await Promise.all(newContents);
				return results;
			};
			asyncLoop()
				.then((res) => setContents(res))
				.catch((err) => {
					return;
				});
		}
	}, [posts]);

	useEffect(() => {
		return () => setContents(null);
	}, []);

	return (
		<Wrapper>
			<Grid>
				{contents &&
					contents.map((value, index) => {
						return (
							<PostDetail
								onClick={() =>
									dispatch(openModal("feed", posts[index].post_id))
								}
							>
								<Image category="square" src={value} width="293px" />
							</PostDetail>
						);
					})}
			</Grid>
		</Wrapper>
	);
};

export default Contents;

const Wrapper = styled.div``;

const TitleDiv = styled.div`
	display: flex;
	justify-content: left;
`;

const Title = styled.h2`
	color: #8e8e8e;
	font-size: 14px;
	margin-bottom: 20px;
`;

const PostDetail = styled.div`
	cursor: pointer;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 28px;
	row-gap: 28px;
	margin-bottom: 50px;
`;
