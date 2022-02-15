import axios from "axios";

const token = () => {
	return `Bearer ${localStorage.getItem("access_token")}`;
};

export const CustomAxios = axios.create({
	timeout: 0,
	headers: {
		access_token: (token = () => {}),
	},
});
