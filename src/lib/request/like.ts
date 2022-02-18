import { likeType } from "lib/types";
import axios from "axios";
import { SEND_LIKE_API } from "common/url";

export const sendLike = async (id: number, callback: () => void) => {
	const likeObj: likeType = {
		user_id: id,
	};
	try {
		const res = await axios.post(SEND_LIKE_API, likeObj);
		console.log(res);
		callback();
	} catch (err) {
		console.log(err);
	}
};

export const sendUnlike = (id: number, callback: () => void) => {
	try {
		// const res = await axios.post(NOTIFY_LIKE_API, likeObj);
		// console.log(res);
		callback();
	} catch (err) {
		console.log(err);
	}
};
