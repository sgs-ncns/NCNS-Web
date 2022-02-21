import createAxios from "common/createAxios";
import { GET_SEARCH_DATA_ALL } from "common/url";
import { checkResponseCode } from "lib/utils";
import { responseType } from "./type";

export type hashtagSearchType = {
	content: string;
	count: number;
	post_id_list: Array<number>;
};

export type userSearchType = {
	account_name: string;
	nickname: string;
	user_id: number;
};

export type globalSearchType = {
	user: userSearchType;
	hashtag: hashtagSearchType;
};

export const getSearchData = async (keyword: string) => {
	try {
		const res: responseType = await createAxios().get(
			GET_SEARCH_DATA_ALL + `?keyword=${keyword}`,
		);
		if (checkResponseCode(res.data.response_code) === "00") {
			const searchData: Array<globalSearchType> = res.data.data.globals;
			if (searchData.length === 0) return;
			return searchData;
		} else throw new Error(res.response_code);
	} catch (err) {
		console.log(err);
		return;
	}
};
