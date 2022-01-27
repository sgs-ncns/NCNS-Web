export const ADD = "ADD";
export const EDIT = "EDIT";
export const REMOVE = "REMOVE";

type UserState = {
	accountName: string | null;
};

type UserAction =
	| ReturnType<typeof addUser>
	| ReturnType<typeof editUser>
	| ReturnType<typeof removeUser>;

const initialState: UserState = {
	accountName: null,
};

export const addUser = (user: UserState) => {
	return { type: ADD, user };
};

export const editUser = (user: UserState) => {
	return { type: EDIT, user };
};

export const removeUser = (user: UserState) => {
	return { type: REMOVE, user };
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
	switch (action.type) {
		case ADD:
			return {
				...state,
				accountName: action.user.accountName,
			};
		case EDIT:
			return {
				...state,
				accountName: action.user.accountName,
			};
		case REMOVE:
			return {
				...state,
				accountName: null,
			};
		default:
			return state;
	}
};

export default userReducer;
