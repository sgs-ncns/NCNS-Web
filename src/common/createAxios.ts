import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./url";

export const customAxios = (): AxiosInstance => {
	return axios.create({
		baseURL: BASE_URL,
		timeout: 10000,
		headers: {
			Authorization: localStorage.getItem("access_token"),
		},
	});
};

export default customAxios;
