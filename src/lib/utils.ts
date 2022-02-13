import { CATEGORY, REQUEST_BUTTON_TYPE } from "../common/types";

export const handleButtonType = (category: string, comment: string) => {
	switch (category) {
		case REQUEST_BUTTON_TYPE.Follow:
			console.log("send follow info to server");
			return;
		case REQUEST_BUTTON_TYPE.UnFollow:
			console.log("send unFollow info to server");
			return;
		case REQUEST_BUTTON_TYPE.Comment:
			alert(`send ${comment} info to server`);
			return;
		case REQUEST_BUTTON_TYPE.Post:
			console.log("send follow info to server");
			return;
	}
};
