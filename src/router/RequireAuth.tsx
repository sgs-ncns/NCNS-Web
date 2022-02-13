import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

// react router dom v6부터는 Outlet이 지원이 되었습니다.
// 이에 따라 RequireAuth를 반환하는 route 하나를 생성하고
// 그 밑에 자식 태그로 중첩하는 라우터를 기재해서 중첩 라우팅을 진행하였습니다.

const RequireAuth = () => {
	const auth = useAuth();
	const location = useLocation();

	//만약 context 정보에 유저가 null이면 로그인 페이지로 리다이렉션을 진행합니다.
	if (!auth.user) {
		return <Navigate to="/login" state={{ from: location }} />;
	}
	return <Outlet />;
};

export default RequireAuth;
