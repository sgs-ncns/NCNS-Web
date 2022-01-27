import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages";
import LoginPage from "pages/Login";
import SignUpPage from "pages/SignUp";
import SearchPage from "pages/Search";
import ProfilePage from "pages/Profile";
import PrivateRoute from "./PrivateRoute";

const index: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="/account/emailSignUp" element={<SignUpPage />} />
				<Route path="/explore/tags/:tagName" element={<SearchPage />} />
				<Route path="/:id" element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
