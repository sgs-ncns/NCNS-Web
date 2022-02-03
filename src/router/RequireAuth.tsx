import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const RequireAuth = () => {
	const auth = useAuth();
	const location = useLocation();

	if (!auth.user) {
		return <Navigate to="/login" state={{ from: location }} />;
	}
	return <Outlet />;
};

export default RequireAuth;
