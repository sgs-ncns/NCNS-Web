/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent, useState } from "react";
import GoogleLogin from "react-google-login";

const GoogleOAuth: FunctionComponent = () => {
	const REACT_APP_GOOGLE_API_KEY =
		"427890388879-ugjaq1ag4bv5kg3ue4sn7ahv4m7t6rfc.apps.googleusercontent.com";

	const [userObj, setUserObj] = useState({ email: "", name: "" });

	const onLoginSuccess = (res: any) => {
		setUserObj({
			...userObj,
			email: res.profileObj.email,
			name: res.profileObj.name,
		});
		console.log(res);
	};

	const onLoginFail = (res: any) => {
		console.log(res);
	};

	return (
		<div style={{ marginTop: "10px", marginBottom: "10px" }}>
			<GoogleLogin
				clientId={REACT_APP_GOOGLE_API_KEY}
				cookiePolicy="single_host_origin"
				onSuccess={onLoginSuccess}
				onFailure={onLoginFail}
			/>
			<br />
			<button type="button" onClick={() => console.log(userObj)}>
				확인하기
			</button>
		</div>
	);
};

export default GoogleOAuth;
