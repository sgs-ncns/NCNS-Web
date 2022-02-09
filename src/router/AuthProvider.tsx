import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { addUser, removeUser, UserState } from "reducers/userReducer";
import { AuthContext } from "./auth";

const fakeAuthProvider = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = true;
		setTimeout(callback, 100); // fake async
	},
	signout(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = false;
		setTimeout(callback, 100); // fake async
	},
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.userReducer.accountName);
	// const [user, setUser] = React.useState<any>(null);

	const signin = (newUser: string, callback: VoidFunction) => {
		return fakeAuthProvider.signin(() => {
			try {
				//await 걸어서 받아오기
				dispatch(addUser(newUser));
				callback();
			} catch (err) {
				console.log(err);
				return;
			}
		});
	};

	const signout = (callback: VoidFunction) => {
		return fakeAuthProvider.signout(() => {
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
