import NavBar from "components/organisms/NavBar";
import React, { useEffect, useState } from "react";
import SearchTemplate from "components/templates/Search";
import SearchHeader from "components/organisms/Search/SearchHeader";
import Contents from "components/molecules/Contents";
import mok from "static/imgs/mok2.jpg";
import { useParams } from "react-router-dom";
import { getPostsByList } from "lib/request/search";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { deleteList } from "reducers/searchReducer";

export type SearchType = {
	post_id: number;
	image_path: string;
	user_id: number;
};

const Search = () => {
	const param = useParams();
	const postIdList = useSelector(
		(state: RootState) => state.searchReducer.postIdList,
	);
	const [posts, setPosts] = useState<Array<SearchType>>();
	const dispatch = useDispatch();

	useEffect(() => {
		const keyword = param.tagName;
		console.log(keyword);
		getPostsByList(postIdList)
			.then((res) => setPosts(res))
			.catch((err) => {
				console.log(err);
				return;
			});

		return () => {
			setPosts(null);
			dispatch(deleteList());
		};
	}, []);

	return (
		<SearchTemplate
			navbar={<NavBar />}
			header={<SearchHeader />}
			article={<Contents category="search" posts={posts} />}
		/>
	);
};

export default Search;
