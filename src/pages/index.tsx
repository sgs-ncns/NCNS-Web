import ImgLink from "components/atoms/ImgLink";
import React, { FC } from "react";

const HomePage: FC = () => {
	return (
		<div>
			헬로
			<ImgLink category={"home"} primary={true} />
		</div>
	);
};

export default HomePage;
