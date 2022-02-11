import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages";
import LoginPage from "pages/Login";
import SignUpPage from "pages/SignUp";
import SearchPage from "pages/Search";
import ProfilePage from "pages/Profile";
import RequireAuth from "./RequireAuth";
import AuthProvider from "./AuthProvider";
import UploadModal from "components/organisms/Modal/UploadModal";
import FeedModal from "components/organisms/Modal/FeedModal";

const index: FC = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<FeedModal />
				<UploadModal />
				<Routes>
					<Route path="login" element={<LoginPage />} />
					<Route path="/account/emailSignUp" element={<SignUpPage />} />
					<Route element={<RequireAuth />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/explore/tags/:tagName" element={<SearchPage />} />
						<Route path="/:id" element={<ProfilePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default index;
