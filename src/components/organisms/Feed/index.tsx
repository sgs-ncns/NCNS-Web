import CommentTab from "components/molecules/Feed/CommentTab";
import FeedBody from "components/molecules/Feed/FeedBody";
import FeedFooter from "components/molecules/Feed/FeedFooter";
import FeedHeader from "components/molecules/Feed/FeedHeader";
import FeedTool from "components/molecules/Feed/FeedTool";
import { requestFeedInfo } from "lib/request/feed";
import { feedArrayType } from "pages";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { requestImages, S3_ADDRESS } from "utils/amplify";

// 피드 컴포넌트입니다. 현재는 목업 데이터로 이루어져 있고
// page에서 데이터를 받아와 바인딩 될 예정입니다.
// 바인딩 되는 정보에 따라 props 타입을 줄 예정입니다.

const Feed = () => {
	const [isLoading, setLoading] = useState(true);
	const [feedInfos, setFeedInfos] = useState<Array<feedArrayType>>();
	const [page, setPage] = useState(1);
	const observer = useRef(null);

	const lastFeedRef = useCallback(
		(event) => {
			if (isLoading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					console.log("bottom");
					const getNewMovie = async () => {
						setLoading(true);
						const newFeed = await requestFeedInfo(page + 1);
						setPage((prev) => prev + 1);
						console.log(newFeed);
						setFeedInfos((feedInfos) => [...feedInfos, ...newFeed]);
						setLoading(false);
					};
					getNewMovie()
						.then()
						.catch((err) => {
							console.log(err);
							return;
						});
				}
			});
			if (event) observer.current.observe(event);
		},
		[page, feedInfos, isLoading],
	);

	useEffect(() => {
		console.log(feedInfos);
		const getfeedList = () => {
			// const feedList = await requestFeedInfo(page);
			requestFeedInfo(page)
				.then((res: Array<feedArrayType>) => setFeedInfos(res))
				.catch((err) => {
					console.log(err);
					return;
				});
		};
		getfeedList();
	}, []);

	// useEffect(() => {
	// 	const newFeed = requestFeedInfo(page).then((response) => {
	// 		return response;
	// 	});
	// 	console.log("newFeed", newFeed);
	// 	requestFeedInfo(page)
	// 		.then((res: Array<feedArrayType>) => {
	// 			setFeedInfos(res);
	// 			console.log(res);
	// 		})
	// 		.catch((err) => console.log(err));
	// 	// console.log("res", res);
	// }, []);

	useEffect(() => {
		if (feedInfos) setLoading(false);
		else setLoading(true);
	}, [feedInfos]);

	return (
		<Wrapper>
			{isLoading ? null : (
				<div>
					{feedInfos.map((value, index) => {
						return (
							<div ref={lastFeedRef}>
								{feedInfos.length === index + 1 ? (
									<FeedHeader id={value.user_id} />
								) : (
									<FeedHeader id={value.user_id} />
								)}
								<FeedBody
									src={requestImages(value.user_id, value.image_path).then(
										(response) => {
											const result = response.map((value) => {
												return S3_ADDRESS + value.key;
											});
											return result;
										},
									)}
								/>
								<FeedTool id="95.seong" />
								<FeedFooter />
								<CommentTab />
							</div>
						);
					})}
				</div>
			)}
		</Wrapper>
	);
};

export default Feed;

const Wrapper = styled.div`
	border: 1px solid #dbdbdb;
	background: white;
`;
