import axios from "axios";
import createAxios from "common/createAxios";
import { GET_USER_PROFILE_INFO } from "common/url";
import { checkResponseCode } from "lib/utils";
import { feedArrayType } from "pages";
import { responseType, userInfoType } from "./type";

export const requestUserInfo = async (userId: number) => {
	try {
		const res = await createAxios().get(GET_USER_PROFILE_INFO + `${userId}`);
		const data: userInfoType = await res.data.data;
		console.log("data", data);
		return data;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const requestFeedInfo = async (
	postId: number,
): Promise<Array<feedArrayType>> => {
	try {
		const res = await axios.get(
			"https://864aedf4-9033-4ea5-ad3c-736b182d96e2.mock.pstmn.io/api/post/" +
				postId.toString(),
		);
		const data: responseType = await res.data;
		console.log("data", data.response_code);
		if (checkResponseCode(data.response_code) === "00") return data.data;
		else throw Error("response code error");
	} catch (err) {
		console.log(err);
		return;
	}
};
