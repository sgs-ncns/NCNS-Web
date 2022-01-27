import React, { useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = (props: any) => {
	const { children } = props;
	const isAuthenticated = localStorage.getItem("fbAccessToken");
	console.log(`isAuth? ${isAuthenticated}`);

	return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
