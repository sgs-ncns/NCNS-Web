import NavBar from "components/organisms/NavBar";
import React, { FC } from "react";
import HomeTemplate from "components/templates/Home";

const HomePage: FC = () => {
	return <HomeTemplate navbar={<NavBar />}></HomeTemplate>;
};

export default HomePage;
