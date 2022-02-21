import createAxios from "common/createAxios";
import { USER_COMMENT, USER_POSTS } from "common/url";
import { CommentType } from "components/molecules/Comment";
import { tagsHandler } from "lib/Handler";
import { checkResponseCode } from "lib/utils";
import { responseType, userPostsType } from "./type";

type createPostBody = {
	account_name: string;
	content: string;
	image_path: string;
	hashtag: Array<string>;
	usertag: Array<number>;
};

export type postDetailResponseType = {
	account_name: string;
	image_path: string;
	comment_list: Array<CommentType>;
	content: string;
	created_at: string;
	post_id: number;
	user_id: number;
	like_count: number;
	liking: boolean;
};

export type sendCommentType = {
	account_name: string;
	content: string;
	post_id: number;
};

export const sendPostInfo = async (
	accountName: string,
	content: string,
	imagePath: string,
) => {
	try {
		const { hashtag, usertag } = tagsHandler(content);
		const body: createPostBody = {
			account_name: accountName,
			content: content,
			image_path: imagePath,
			hashtag: hashtag,
			usertag: usertag,
		};
		const res: responseType = await createAxios().post(USER_POSTS, body);
		const responseCode = await res.data.response_code;
		return responseCode;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const requestPostDetails = async (postId: number) => {
	try {
		const res: responseType = await createAxios().get(
			USER_POSTS + `/${postId}`,
		);
		const data: postDetailResponseType = await res.data.data;
		return data;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const sendComment = async (
	myAccountName: string,
	content: string,
	postId: number,
) => {
	const body: sendCommentType = {
		account_name: myAccountName,
		content: content,
		post_id: postId,
	};
	try {
		const res: responseType = await createAxios().post(USER_COMMENT, body);
		return res.data.response_code;
	} catch (err) {
		console.log(err);
		return;
	}
};
