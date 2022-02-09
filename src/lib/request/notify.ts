import axios from "axios";
import { GET_NOTIFICATION_API } from "common/url";

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
