import { sendLogin } from "lib/request/login";
import { checkResponseCode } from "lib/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { addUser, removeUser, UserState } from "reducers/userReducer";
import { WarningAlert } from "utils/swal";
import { isEmail } from "utils/format";
import { AuthContext } from "./auth";

// 로직을 포함한 객체입니다. 이 객체에서는 로그인 시  불리울 함수를 정의하고 기능만 정의하고 있습니다.
const AuthProviderObject = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		AuthProviderObject.isAuthenticated = true;
		setTimeout(callback, 100); // async 강제
	},
	signout(callback: VoidFunction) {
		AuthProviderObject.isAuthenticated = false;
		setTimeout(callback, 100); // async 강제
	},
};

// 종속성 주입이 될 곳인 Provider입니다.
// 리듀서 + context api 구조로 되어 있으며, 리듀서는 동기적으로 처리가 되기에 아직 어떤 에러가 발생할 지는 미지수입니다.
// 만약 비동기에 관한 에러 발생 시, reducer middleware 혹은 비동기 함수를 만들어 구현할 예정입니다.
// 일단 로그인을 하면 유저 값에 저장을 한 후, selector를 통해 반환하는 것으로 만들어보았습니다.
// 지역 상태 변수를 사용하지 않은 이유는 리듀서에 어차피 로그인 유저 정보가 저장되기 때문에,
// 굳이 상태 값을 지역 변수로 또 한 번 선언하지 않아도 된다고 생각했기 때문입니다.
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<any>(null);

	const signin = (id: string, password: string, callback: VoidFunction) => {
		return AuthProviderObject.signin(() => {
			try {
				const res = sendLogin(id, password).then((response) => {
					console.log(response);
					const responseCode = checkResponseCode(response.data.response_code);
					if (responseCode === "00") {
						setUser(response.data.data.account_name);
						localStorage.setItem(
							"access_token",
							response.data.data.access_token,
						);
						callback();
					} else {
						WarningAlert("유효하지 않은 아이디입니다.")
							.then((response) => console.log(response))
							.catch((err) => console.log(err));
						return;
					}
				});
			} catch (err) {
				console.log(err);
				return;
			}
		});
	};

	const signout = (callback: VoidFunction) => {
		return AuthProviderObject.signout(() => {
			try {
				dispatch(removeUser(user));
				callback();
			} catch (err) {
				console.log(err);
				return;
			}
		});
	};

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
function dispatch(arg0: { type: string; user: string }) {
	throw new Error("Function not implemented.");
}
