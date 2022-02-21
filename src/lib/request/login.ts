import axios from "axios";
import { SEND_LOGIN_ACCOUNT_API, SEND_LOGIN_EMAIL_API } from "common/url";
import { isEmail } from "utils/format";

export const sendLogin = async (id: string, password: string) => {
	let email: boolean;
	isEmail(id, (value: boolean) => (email = value));
	let body: object;
	if (email) {
		body = {
			email: id,
			password: password,
		};
		console.log(body);
		return await axios.post(SEND_LOGIN_EMAIL_API, body);
	} else {
		body = {
			account_name: id,
			password: password,
		};
		return await axios.post(SEND_LOGIN_ACCOUNT_API, body);
	}
};
