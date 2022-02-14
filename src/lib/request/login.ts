import axios from "axios";
import { SEND_LOGIN_ACCOUNT_API, SEND_LOGIN_EMAIL_API } from "common/url";
import { emailHandler } from "utils/format";

export const sendLogin = async (id: string, password: string) => {
	let isEmail: boolean;
	emailHandler(id, (value: boolean) => (isEmail = value));
	console.log(isEmail);
	let body: object;
	if (isEmail) {
		body = {
			email: id,
			password: password,
		};
		return await axios.post(SEND_LOGIN_EMAIL_API, body);
	} else {
		body = {
			accountName: id,
			password: password,
		};
		return await axios.post(SEND_LOGIN_ACCOUNT_API, body);
	}
};
