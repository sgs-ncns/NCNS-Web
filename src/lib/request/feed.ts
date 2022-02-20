import axios from "axios";
import createAxios from "common/createAxios";
import { GET_FEED, GET_KKANBU_FEED, GET_USER_PROFILE_INFO } from "common/url";
import { checkResponseCode } from "lib/utils";
import { feedArrayType } from "pages";
import { responseType } from "./type";

export type KkanbuFeedResponseType = {
	recent_feeds: Array<feedArrayType>;
	user_id: number;
};

export const requestUserInfo = async (accountName: string) => {
	try {
		const res = await createAxios().get(
			GET_USER_PROFILE_INFO + `${accountName}`,
		);
		const data: any = await res.data.data;
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
		const res: responseType = await createAxios().get(GET_FEED);
		const data = await res.data;
		if (checkResponseCode(data.response_code) === "00") return data.data.feeds;
		else throw Error("response code error");
	} catch (err) {
		console.log(err);
		return;
	}
};

export const requestKkanbuFeedInfo = async (): Promise<
	Array<KkanbuFeedResponseType>
> => {
	try {
		const res = await createAxios().get(GET_KKANBU_FEED);
		const data: responseType = await res.data;
		if (checkResponseCode(data.response_code) === "00") return data.data;
		else throw Error(data.response_code);
	} catch (err) {
		console.log(err);
		return;
	}
};
