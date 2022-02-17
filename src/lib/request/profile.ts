import createAxios from "common/createAxios";
import {
	GET_FOLLOWER_INFO,
	GET_FOLLOWING_INFO,
	GET_USER_POSTS,
} from "common/url";
import { followerInfoType, responseType, userPostsType } from "./type";

export const requestFollowerInfo = async (userId: number) => {
	try {
		const res: responseType = await createAxios().get(
			GET_FOLLOWER_INFO + `/${userId}/followers`,
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
			GET_FOLLOWING_INFO + `/${userId}/following`,
		);
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
			GET_USER_POSTS + `/${userId}`,
		);
		const data: Array<userPostsType> = await res.data.data;
		return data;
	} catch (err) {
		console.log(err);
		return;
	}
};
