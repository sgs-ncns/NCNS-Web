import { SetStateAction } from "react";

export const isEmail = (
	email: string,
	callback: { (state: boolean): void; (arg0: boolean): any },
): void => {
	const regEmail =
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

	regEmail.test(email) ? callback(true) : callback(false);
};

export const checkValidId = (
	id: string,
	callback: (isValid: boolean) => void,
): void => {
	const regEnglish = /[a-z0-9]/;

	regEnglish.test(id) ? callback(true) : callback(false);
};
