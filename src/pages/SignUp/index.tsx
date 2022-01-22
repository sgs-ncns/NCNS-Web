import SignUp from "components/organisms/SignUp";
import SignUpTemplate from "components/templates/Login";
import React, { FC } from "react";

const SignUpPage: FC = () => {
	return <SignUpTemplate signUp={<SignUp />} />;
};

export default SignUpPage;
