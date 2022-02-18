import createAxios from "common/createAxios";
import { USER_POSTS } from "common/url";
import { tagsHandler } from "lib/Handler";
import { responseType } from "./type";

type createPostBody = {
	account_name: string;
	content: string;
	image_path: string;
	hashtag: Array<string>;
	usertag: Array<string>;
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
