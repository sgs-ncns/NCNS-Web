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

export const createFolderName = (): string => {
	const date = new Date();
	const year = date.getFullYear().toString();
	const month = ("0" + (1 + date.getMonth())).slice(-2);
	const day = ("0" + date.getDate()).slice(-2);
	const hour = ("0" + date.getHours()).slice(-2);
	const minute = ("0" + date.getMinutes()).slice(-2);
	const second = ("0" + date.getSeconds()).slice(-2);

	return year + month + day + hour + minute + second;
};
