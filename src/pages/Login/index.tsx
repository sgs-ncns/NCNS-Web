import Login from "components/organisms/Login";
import LoginTemplate from "components/templates/Login";
import React, { FC } from "react";

const LoginPage: FC = () => {
	return <LoginTemplate login={<Login />} />;
};

export default LoginPage;
