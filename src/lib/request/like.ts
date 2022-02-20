import { likeType } from "lib/types";
import axios from "axios";
import { SEND_NOTIFY_LIKE } from "common/url";

export const sendLike = async (
	accountName: string,
	postId: number,
	myAccountName: string,
	callback: () => void,
) => {
	const likeObj: likeType = {
		account_name: accountName,
		post_id: postId,
		target_account_name: myAccountName,
	};
	try {
		const res = await axios.post(SEND_NOTIFY_LIKE, likeObj);
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
