import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "components/atoms/Image";
import { userPostsType } from "lib/request/type";
import { requestRepImage, S3_ADDRESS } from "utils/amplify";

// 검색뷰와 프로필의 그리드 뷰입니다.
// 같이 사용할 수 있을 것 같아서 category를 두고
// 인기 게시물을 표시하고 안하고의 여부에 대한 생각을 담았습니다.

interface ContentType {
	category: "search" | "profile";
	popular?: Array<string>;
	posts: Array<userPostsType>;
}

const Contents: FunctionComponent<ContentType> = (props) => {
	const { category, popular, posts } = props;
	const [contents, setContents] = useState<Array<string>>([]);

	useEffect(() => {
		if (posts) {
			console.log("posts 잘 들옴");
			const asyncLoop = async () => {
				const newContents = posts.map(async (value) => {
					return await requestRepImage(value.user_id, value.image_path).then(
						(res) => S3_ADDRESS + res.key,
					);
				});
				const results = await Promise.all(newContents);
				return results;
			};
			asyncLoop()
				.then((res) => setContents(res))
				.catch((err) => {
					console.log(err);
					return;
				});
		}
		console.log("끝");
	}, [posts]);

	useEffect(() => {
		console.log(contents);
	}, [contents]);

	return (
		<Wrapper>
			{category === "search" && (
				<>
					<TitleDiv>
						<Title>인기 게시물</Title>
					</TitleDiv>
					<Grid>
						{popular.map((value, index) => {
							return (
								<Image category="square" src={popular[index]} width="293px" />
							);
						})}
					</Grid>
					<TitleDiv>
						<Title>최근 게시물</Title>
					</TitleDiv>
				</>
			)}
			<Grid>
				{contents.map((value, index) => {
					return <Image category="square" src={value} width="293px" />;
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

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 28px;
	row-gap: 28px;
	margin-bottom: 50px;
`;
