import Contents from "components/molecules/Contents";
import NavBar from "components/organisms/NavBar";
import ProfileHeader from "components/organisms/Profile/ProfileHeader";
import SearchTemplate from "components/templates/Search";
import React, { FunctionComponent, useState } from "react";
import mok from "static/imgs/mok2.jpg";

const Profile: FunctionComponent = () => {
	const [thumbnails, setThumbnails] = useState([mok, mok, mok, mok, mok, mok]);
	return (
		<div>
			<SearchTemplate
				navbar={<NavBar />}
				header={<ProfileHeader />}
				article={<Contents category={"profile"} thumbnails={thumbnails} />}
			/>
		</div>
	);
};

export default Profile;
