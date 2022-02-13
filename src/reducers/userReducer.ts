export const ADD_USER_INFO = "ADD";
export const EDIT_USER_INFO = "EDIT";
export const REMOVE_USER_INFO = "REMOVE";

// 내 정보를 담을 수 있는 reducer입니다. 여러 컴포넌트에서 사용이 될 것이기 때문에
// 값은 미정이며 통신이 여러 분야에서 진행되게 되면 가지고 있는 값이 수정될 예정입니다.

export type UserState = {
	accountName: string | null;
};

type UserAction =
	| ReturnType<typeof addUser>
	| ReturnType<typeof editUser>
	| ReturnType<typeof removeUser>;

const initialState: UserState = {
	accountName: null,
};

export const addUser = (user: string) => {
	return { type: ADD_USER_INFO, user };
};

export const editUser = (user: string) => {
	return { type: EDIT_USER_INFO, user };
};

export const removeUser = (user: string) => {
	return { type: REMOVE_USER_INFO, user };
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
	switch (action.type) {
		case ADD_USER_INFO:
			return {
				...state,
				accountName: action.user,
			};
		case EDIT_USER_INFO:
			return {
				...state,
				accountName: action.user,
			};
		case REMOVE_USER_INFO:
			return {
				...state,
				accountName: null,
			};
		default:
			return state;
	}
};

export default userReducer;
