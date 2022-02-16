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
import FollowModal from "components/organisms/Modal/FollowModal";

// 페이지를 어디로 갈 지 나누어 주는 router 파트입니다.
// 모달들을 최상위에 위치 시켜 다른 컴포넌트들과의 연관성을 끊었으며,
// 단일 모달로 만드는 것이 목표입니다.

const index: FC = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<FeedModal />
				<UploadModal />
				<FollowModal />
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
