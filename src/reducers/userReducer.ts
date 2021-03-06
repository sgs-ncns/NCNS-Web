import { userInfoType } from "lib/request/type";

export const ADD_USER_INFO = "ADD";
export const EDIT_USER_INFO = "EDIT";
export const REMOVE_USER_INFO = "REMOVE";

// 내 정보를 담을 수 있는 reducer입니다. 여러 컴포넌트에서 사용이 될 것이기 때문에
// 값은 미정이며 통신이 여러 분야에서 진행되게 되면 가지고 있는 값이 수정될 예정입니다.

export type UserState = {
	accountName: string | null;
	userId: number;
};

type UserAction =
	| ReturnType<typeof addUser>
	| ReturnType<typeof editUser>
	| ReturnType<typeof removeUser>;

const initialState: UserState = {
	accountName: null,
	userId: 0,
};

export const addUser = (user: userInfoType) => {
	const payload: UserState = {
		accountName: user.account_name,
		userId: user.user_id,
	};
	return { type: ADD_USER_INFO, payload };
};

export const editUser = (payload: object) => {
	return { type: EDIT_USER_INFO, payload };
};

export const removeUser = (payload: object) => {
	return { type: REMOVE_USER_INFO, payload };
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
	switch (action.type) {
		case ADD_USER_INFO:
			return {
				...state,
				...action.payload,
			};
		case EDIT_USER_INFO:
			return {
				...state,
				...action.payload,
			};
		case REMOVE_USER_INFO:
			return {
				...state,
				accountName: null,
				userId: null,
			};
		default:
			return state;
	}
};

export default userReducer;
