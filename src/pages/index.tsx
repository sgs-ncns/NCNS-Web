import NavBar from "components/organisms/NavBar";
import React, { FunctionComponent } from "react";
import HomeTemplate from "components/templates/Home";
import Feed from "components/organisms/Feed";

const HomePage: FunctionComponent = () => {
	return <HomeTemplate navbar={<NavBar />} feed={<Feed />}></HomeTemplate>;
};

export default HomePage;
