import { CLOSE_MODAL } from "./modalReducer";

export const OPEN_FOLLOWER_MODAL = "OPEN_FOLLOWER_MODAL";
export const OPEN_FOLLOWING_MODAL = "OPEN_FOLLOWING_MODAL";
export const OPEN_KKANBU_MODAL = "OPEN_KKANBU_MODAL";

type FollowModalState = {
	isOpen: boolean;
	category: string | null;
	userId: number;
};

const initialFollowState: FollowModalState = {
	isOpen: false,
	category: null,
	userId: 0,
};

type FollowModalAction = ReturnType<typeof openFollowModal>;

export const openFollowModal = (
	category: "follower" | "following" | "kkanbu",
	userId: number,
) => {
	switch (category) {
		case "follower": {
			const object = {
				category: category,
				userId: userId,
			};
			return { type: OPEN_FOLLOWER_MODAL, object };
		}
		case "following": {
			const object = {
				category: category,
				userId: userId,
			};
			return { type: OPEN_FOLLOWING_MODAL, object };
		}
		case "kkanbu": {
			const object = {
				category: category,
				userId: userId,
			};
			return { type: OPEN_KKANBU_MODAL, object };
		}
		default:
			return { type: "null" };
	}
};

export const closeFollowModal = () => {
	return { type: CLOSE_MODAL };
};

const followModalReducer = (
	state: FollowModalState = initialFollowState,
	action: FollowModalAction,
) => {
	switch (action.type) {
		case OPEN_FOLLOWER_MODAL:
			return {
				...state,
				isOpen: true,
				...action.object,
			};
		case OPEN_FOLLOWING_MODAL:
			return {
				...state,
				isOpen: true,
				...action.object,
			};
		case OPEN_KKANBU_MODAL:
			return {
				...state,
				isOpen: true,
				...action.object,
			};
		case CLOSE_MODAL:
			return {
				...state,
				isOpen: false,
			};
		default:
			return { ...state };
	}
};

export default followModalReducer;
