import React from "react";

// useContext를 통해 Authcontext를 반환합니다.

interface AuthContextType {
	user: any;
	signin: (user: string, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
	return React.useContext(AuthContext);
}
