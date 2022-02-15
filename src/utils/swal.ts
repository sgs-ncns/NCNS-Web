import Swal from "sweetalert2";

export const WarningAlert = async (title: string) => {
	await Swal.fire({
		title: title,
		icon: "error",
	});
};
