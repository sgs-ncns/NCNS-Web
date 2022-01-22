import NavBar from "components/organisms/NavBar";
import React, { useState } from "react";
import SearchTemplate from "components/templates/Search";
import SearchHeader from "components/organisms/Search/SearchHeader";
import Contents from "components/molecules/Contents";
import mok from "static/imgs/mok2.jpg";

const Search = () => {
	const [popular, setPopular] = useState([
		mok,
		mok,
		mok,
		mok,
		mok,
		mok,
		mok,
		mok,
		mok,
	]);
	const [thumbnails, setThumbnails] = useState([mok, mok, mok, mok, mok, mok]);

	return (
		<SearchTemplate
			navbar={<NavBar />}
			header={<SearchHeader />}
			article={
				<Contents category="search" popular={popular} thumbnails={thumbnails} />
			}
		/>
	);
};

export default Search;
