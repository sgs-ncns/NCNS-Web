import axios from "axios";
import { SEND_SIGNUP_INFO_API } from "common/url";

export const sendSignUp = async (
	email: string,
	nickname: string,
	accountName: string,
	password: string,
	callback: VoidFunction,
) => {
	const body = {
		email: email,
		nickname: nickname,
		accountName: accountName,
		password: password,
	};
	console.log(body);
	try {
		const res = await axios.post(SEND_SIGNUP_INFO_API, body);
		console.log(res);
		const data = await res.data;
		console.log(data);
		callback();
	} catch (err) {
		console.log(err);
		return;
	}
};
