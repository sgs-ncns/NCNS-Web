export const OPEN_UPLOAD_MODAL = "OPEN_UPLOAD_MODAL";
export const OPEN_PROFILE_MODAL = "OPEN_PROFILE_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const CLOSE_PROFILE_MODAL = "CLOSE_PROFILE_MODAL";

// 모달 구현 파트입니다.

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

export const closeModal = () => {
	return { type: CLOSE_MODAL };
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
		case OPEN_PROFILE_MODAL:
			return {
				...state,
				isProfileOpen: true,
			};
		case CLOSE_MODAL:
			return {
				...state,
				isProfileOpen: false,
				isUploadOpen: false,
			};
		default:
			return state;
	}
};

export default modalReducer;
