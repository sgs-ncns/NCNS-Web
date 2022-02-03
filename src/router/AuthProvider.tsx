import React from "react";
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
	const [user, setUser] = React.useState<any>(null);

	const signin = (newUser: string, callback: VoidFunction) => {
		return fakeAuthProvider.signin(() => {
			setUser(newUser);
			callback();
		});
	};

	const signout = (callback: VoidFunction) => {
		return fakeAuthProvider.signout(() => {
			setUser(null);
			callback();
		});
	};

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
