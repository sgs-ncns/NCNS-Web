import NavBar from "components/organisms/NavBar";
import React from "react";
import SearchTemplate from "components/templates/Search";
import SearchHeader from "components/organisms/Search/SearchHeader";
import SearchContent from "components/organisms/Search/SearchContent";

const Search = () => {
	return (
		<SearchTemplate
			navbar={<NavBar />}
			header={<SearchHeader />}
			article={<SearchContent />}
		/>
	);
};

export default Search;
