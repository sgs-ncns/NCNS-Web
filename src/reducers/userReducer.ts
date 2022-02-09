export const ADD_USER_INFO = "ADD";
export const EDIT_USER_INFO = "EDIT";
export const REMOVE_USER_INFO = "REMOVE";

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
