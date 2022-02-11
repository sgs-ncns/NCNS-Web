import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "reducers/dropReducer";
import { closeModal } from "reducers/modalReducer";

export const dropdownHandler = (
	category: string,
	currentState: boolean,
	dispatch: any,
): void => {
	console.log(category, currentState);
	currentState ? dispatch(closeMenu(category)) : dispatch(openMenu(category));
};

export const modalCloseHandler = (dispatch: any) => {
	dispatch(closeModal());
};
