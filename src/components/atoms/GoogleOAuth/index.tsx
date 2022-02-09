/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { requestToken } from "lib/auth";
import React, { FunctionComponent, useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { addUser } from "reducers/userReducer";

const GoogleOAuth: FunctionComponent = () => {
	const REACT_APP_GOOGLE_API_KEY =
		"427890388879-ugjaq1ag4bv5kg3ue4sn7ahv4m7t6rfc.apps.googleusercontent.com";

	const [userObj, setUserObj] = useState({ email: "", name: "" });
	const user = useSelector((state: RootState) => state.userReducer.accountName);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(user);
	}, [user]);

	const onLoginSuccess = async (res: any) => {
		setUserObj({
			...userObj,
			email: res.profileObj.email,
			name: res.profileObj.name,
		});
		dispatch(addUser(res.profileObj.name));
		console.log(res.profileObj.email);
		await requestToken(res.profileObj.email, "Google");
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
			>
				Google ID로 로그인
			</GoogleLogin>
			<br />
		</div>
	);
};

export default GoogleOAuth;
