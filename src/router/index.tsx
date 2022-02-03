import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages";
import LoginPage from "pages/Login";
import SignUpPage from "pages/SignUp";
import SearchPage from "pages/Search";
import ProfilePage from "pages/Profile";
import RequireAuth from "./RequireAuth";
import AuthProvider from "./AuthProvider";

const index: FC = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<LoginPage />} />
					<Route element={<RequireAuth />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/account/emailSignUp" element={<SignUpPage />} />
						<Route path="/explore/tags/:tagName" element={<SearchPage />} />
						<Route path="/:id" element={<ProfilePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default index;
