import createAxios from "common/createAxios";
import {
	GET_FOLLOWER_INFO,
	GET_FOLLOWING_INFO,
	GET_SUBSCRIBE_INFO,
	USER_POSTS,
	SEND_FOLLOW,
	SEND_SUBSCRIBE,
} from "common/url";
import { checkResponseCode } from "lib/utils";
import { followerInfoType, responseType, userPostsType } from "./type";

export const requestFollowerInfo = async (userId: number) => {
	try {
		const res: responseType = await createAxios().get(
			GET_FOLLOWER_INFO + `${userId}/followers`,
		);
		const data: Array<followerInfoType> = await res.data.data;
		return data;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const requestFollowingInfo = async (userId: number) => {
	try {
		const res: responseType = await createAxios().get(
			GET_FOLLOWING_INFO + `${userId}/following`,
		);
		const data: Array<followerInfoType> = await res.data.data;
		return data;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const requestSubscribeInfo = async () => {
	try {
		const res: responseType = await createAxios().get(GET_SUBSCRIBE_INFO);
		const data: Array<followerInfoType> = await res.data.data;
		return data;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const requestUserPosts = async (userId: number) => {
	try {
		const res: responseType = await createAxios().get(
			USER_POSTS + `?userId=${userId}`,
		);
		if (checkResponseCode(res.data.response_code)) {
			const data = await res.data.data;
			return data;
		} else throw new Error(`code Error`);
	} catch (err) {
		console.log(err);
		return;
	}
};

export const requestFollow = async (userId: number) => {
	try {
		const res: responseType = await createAxios().post(
			SEND_FOLLOW + `${userId}`,
		);
		const responseCode: string = await res.data.response_code;
		return responseCode;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const requestSubscribe = async (userId: number) => {
	try {
		const res: responseType = await createAxios().post(
			SEND_SUBSCRIBE + `${userId}`,
		);
		const responseCode: string = await res.data.response_code;
		return responseCode;
	} catch (err) {
		console.log(err);
		return;
	}
};
