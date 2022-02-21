import axios from "axios";
import createAxios from "common/createAxios";
import {
	GET_NOTIFICATION_API,
	SEND_NOTIFY_COMMENT,
	SEND_NOTIFY_POST,
} from "common/url";

export type sendNotifyType = {
	target_account_name: string;
	post_id: number;
	account_name: string;
};

export const requestNotify = async (
	accountName: string,
	// callback: (data: any) => void,
) => {
	try {
		return await axios.get(GET_NOTIFICATION_API + `/${accountName}`);
	} catch (err) {
		console.log(err);
		return;
	}
};

export const sendCommentNotify = async (
	targetName: string,
	postId: number,
	myId: string,
) => {
	const body: sendNotifyType = {
		account_name: targetName,
		target_account_name: myId,
		post_id: postId,
	};
	try {
		const res = await createAxios().post(SEND_NOTIFY_COMMENT, body);
		return res;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const sendPostNotify = async (accountName: string) => {
	const body = {
		queue_name: accountName,
	};
	try {
		const res = await createAxios().post(SEND_NOTIFY_POST, body);
		return res;
	} catch (err) {
		console.log(err);
		return;
	}
};
