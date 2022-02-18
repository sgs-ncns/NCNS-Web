import axios, { AxiosInstance, AxiosStatic } from "axios";
import { BASE_URL } from "./url";

const createAxios = (): AxiosInstance => {
	return axios.create({
		baseURL: BASE_URL,
		timeout: 10000,
		headers: {
			Authorization: "Bearer " + localStorage.getItem("access_token"),
		},
	});
};

export default createAxios;
