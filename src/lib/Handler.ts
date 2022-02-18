import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "reducers/dropReducer";
import { closeModal } from "reducers/modalReducer";

export const dropdownHandler = (
	category: string,
	currentState: boolean,
	dispatch: any,
): void => {
	console.log(category, currentState);
	currentState ? dispatch(closeMenu()) : dispatch(openMenu(category));
};

export const tagsHandler = (content: string) => {
	const hashtag: Array<string> = [];
	const usertag: Array<number> = [];
	const contentArray = content.split(" ");
	contentArray.forEach((word) => {
		if (word.startsWith("#")) {
			hashtag.push(word.substring(1, word.length));
		}
	});

	return { hashtag, usertag };
};

export const modalCloseHandler = (dispatch: any) => {
	dispatch(closeModal());
};
