import axios from "axios";
import { checkResponseCode } from "lib/utils";
import { feedArrayType } from "pages";

interface responseType {
	response_code: string;
	message: string;
	data: Array<feedArrayType>;
}

export const requestFeedInfo = async (
	postId: number,
): Promise<Array<feedArrayType>> => {
	try {
		console.log(
			"https://864aedf4-9033-4ea5-ad3c-736b182d96e2.mock.pstmn.io/api/post/" +
				postId.toString(),
		);
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
