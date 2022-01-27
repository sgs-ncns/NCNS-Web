import axios, { AxiosResponse } from "axios";

interface requestType {
	email: string;
	platform: string;
}

interface Tokens {
	accessToken: string;
	refreshToken: string;
}

export const requestToken = async (email: string, platform: string) => {
	try {
		const res = await axios.post(
			"https://de3d0a97-e445-4d74-a8f4-d170b36e6716.mock.pstmn.io/testapi",
			{
				email: email,
				platform: platform,
			},
		);
		console.log(res);
	} catch (err) {
		console.log("Error >> ", err);
	}
};
