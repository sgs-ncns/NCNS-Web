import ImgLink from "components/atoms/ImgLink";
import React, { FunctionComponent } from "react";

const NavMenu: FunctionComponent = () => {
	return (
		<div>
			<ImgLink category="home" primary link="/" />
		</div>
	);
};

export default NavMenu;
