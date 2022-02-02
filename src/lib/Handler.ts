import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "reducers/dropReducer";

export const dropdownHandler = (
	category: string,
	currentState: boolean,
	dispatch: any,
): void => {
	console.log(category, currentState);
	currentState ? dispatch(closeMenu(category)) : dispatch(openMenu(category));
};
