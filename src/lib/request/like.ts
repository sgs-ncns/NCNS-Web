import { likeType } from "lib/types";
import axios from "axios";
import { SEND_LIKE, SEND_NOTIFY_LIKE } from "common/url";
import createAxios from "common/createAxios";
import { checkResponseCode } from "lib/utils";
import { responseType } from "./type";

export const sendLike = async (
	isLiked: boolean,
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
		const serverRes: responseType = await createAxios().post(
			SEND_LIKE + `${postId}`,
		);
		if (checkResponseCode(serverRes.data.response_code) === "00") {
			if (!isLiked && myAccountName !== accountName) {
				const res = await axios.post(SEND_NOTIFY_LIKE, likeObj);
			}
			callback();
		} else throw Error(serverRes.data.response_code);
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
