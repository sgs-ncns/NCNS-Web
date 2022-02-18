export const OPEN_UPLOAD_MODAL = "OPEN_UPLOAD_MODAL";
export const OPEN_PROFILE_MODAL = "OPEN_PROFILE_MODAL";

export const CLOSE_MODAL = "CLOSE_MODAL";

// 모달 구현 파트입니다.

export const openModal = (category: string, postId?: number) => {
	const object = {
		isOpen: true,
		category: category,
		postId: postId,
	};
	switch (category) {
		case "upload":
			return { type: OPEN_UPLOAD_MODAL, object };
		case "feed":
			return { type: OPEN_PROFILE_MODAL, object };
		default:
			return { type: "null" };
	}
};

export const closeModal = () => {
	return { type: CLOSE_MODAL };
};

type ModalAction = ReturnType<typeof openModal>;

type ModalState = {
	isOpen: boolean;
	category: string;
	postId: number;
};

const initialState: ModalState = {
	isOpen: false,
	category: null,
	postId: null,
};

const modalReducer = (
	state: ModalState = initialState,
	action: ModalAction,
) => {
	switch (action.type) {
		case OPEN_UPLOAD_MODAL:
			return {
				...state,
				...action.object,
			};
		case OPEN_PROFILE_MODAL:
			return {
				...state,
				...action.object,
			};
		case CLOSE_MODAL:
			return {
				...state,
				isOpen: false,
				category: null,
				postId: null,
			};
		default:
			return state;
	}
};

export default modalReducer;
