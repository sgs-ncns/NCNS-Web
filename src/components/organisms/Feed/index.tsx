import Spinner from "components/atoms/Spinner";
import CommentTab from "components/molecules/Feed/CommentTab";
import FeedBody from "components/molecules/Feed/FeedBody";
import FeedFooter from "components/molecules/Feed/FeedFooter";
import FeedHeader from "components/molecules/Feed/FeedHeader";
import FeedTool from "components/molecules/Feed/FeedTool";
import { requestFeedInfo } from "lib/request/feed";
import { feedArrayType } from "pages";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import styled from "styled-components";

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
					const getNewFeed = async () => {
						setLoading(true);
						const newFeed = await requestFeedInfo(page + 1);
						setPage((prev) => prev + 1);
						setFeedInfos((feedInfos) => [...feedInfos, ...newFeed]);
						console.log(feedInfos);
						setLoading(false);
					};
					getNewFeed()
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
		const getfeedList = async () => {
			try {
				const res = await requestFeedInfo(page);
				setFeedInfos(res);
				return res;
			} catch (err) {
				console.log(err);
				return;
			}
		};
		getfeedList()
			.then((res) => {
				setLoading(false);
				console.log(res);
			})
			.catch((err) => {
				return;
			});
	}, []);

	useEffect(() => {
		if (feedInfos) setLoading(false);
		else setLoading(true);
	}, [feedInfos]);

	return (
		<Wrapper>
			{feedInfos && feedInfos.length > 0 ? (
				feedInfos.map((value, index) => {
					return (
						<>
							<FeedWrapper>
								{feedInfos.length === index + 1 ? (
									<FeedHeader id={value.account_name} />
								) : (
									<FeedHeader id={value.account_name} />
								)}
								<FeedBody userId={value.user_id} imagePath={value.image_path} />
								<FeedTool
									likeCount={value.like_count}
									postId={value.post_id}
									accountName={value.account_name}
								/>
								<FeedFooter
									content={value.content}
									accountName={value.account_name}
									postId={value.post_id}
								/>
								<CommentTab
									isLiked={value.liking}
									targetName={value.account_name}
									postId={value.post_id}
								/>
							</FeedWrapper>
							<Divider ref={lastFeedRef} />
						</>
					);
				})
			) : (
				<h2>팔로워가 없습니다. 팔로우를 추가해보세요!</h2>
			)}
			<SpinnerWrapper>{isLoading && <Spinner />}</SpinnerWrapper>
		</Wrapper>
	);
};

export default Feed;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const FeedWrapper = styled.div`
	border: 1px solid #dbdbdb;
	background: white;
`;

const Divider = styled.div`
	display: flex;
	height: 3rem;
`;

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-itmes: center;
`;
