import NavBar from "components/organisms/NavBar";
import React, { FunctionComponent, useEffect, useState } from "react";
import HomeTemplate from "components/templates/Home";
import Feed from "components/organisms/Feed";
import { requestImages } from "util/amplify";

const HomePage: FunctionComponent = () => {
	const [Images, setImages] = useState([]);
	useEffect(() => {
		requestImages()
			.then((res) => setImages(res))
			.catch((err) => console.log(err));
	}, []);
	return (
		<HomeTemplate
			navbar={<NavBar />}
			feed={<Feed src={Images} />}
		></HomeTemplate>
	);
};

export default HomePage;
