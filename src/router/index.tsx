import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/index";
import LoginPage from "pages/Login/index";
import SignUpPage from "pages/SignUp/index";

const index: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="/account/emailSignUp" element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
