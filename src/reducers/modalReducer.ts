export const OPEN_UPLOAD_MODAL = "OPEN_UPLOAD_MODAL";
export const CLOSE_UPLOAD_MODAL = "CLOSE_UPLOAD_MODAL";
export const OPEN_PROFILE_MODAL = "OPEN_PROFILE_MODAL";
export const CLOSE_PROFILE_MODAL = "CLOSE_PROFILE_MODAL";

export const openModal = (category: string) => {
	switch (category.toString()) {
		case OPEN_UPLOAD_MODAL:
			return { type: OPEN_UPLOAD_MODAL };
		case OPEN_PROFILE_MODAL:
			return { type: OPEN_PROFILE_MODAL };
		default:
			return { type: "null" };
	}
};

export const closeModal = (category: string) => {
	switch (category.toString()) {
		case CLOSE_UPLOAD_MODAL:
			return { type: CLOSE_UPLOAD_MODAL };
		case CLOSE_PROFILE_MODAL:
			return { type: CLOSE_PROFILE_MODAL };
		default:
			return { type: "null" };
	}
};

type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal>;

type ModalState = {
	isUploadOpen: boolean;
	isProfileOpen: boolean;
};

const initialState: ModalState = {
	isUploadOpen: false,
	isProfileOpen: false,
};

const modalReducer = (
	state: ModalState = initialState,
	action: ModalAction,
) => {
	switch (action.type) {
		case OPEN_UPLOAD_MODAL:
			return {
				...state,
				isUploadOpen: true,
			};
		case CLOSE_UPLOAD_MODAL:
			return {
				...state,
				isUploadOpen: false,
			};
		case OPEN_PROFILE_MODAL:
			return {
				...state,
				isProfileOpen: true,
			};
		case CLOSE_PROFILE_MODAL:
			return {
				...state,
				isProfileOpen: false,
			};
		default:
			return state;
	}
};

export default modalReducer;
