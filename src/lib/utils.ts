import { CATEGORY, REQUEST_BUTTON_TYPE } from "./types";
import Logo from "static/imgs/logo.png";
import Home from "static/imgs/icons/Home@2x.png";
import Add from "static/imgs/icons/add@2x.png";
import Like from "static/imgs/icons/like@2x.png";
import Message from "static/imgs/icons/message@2x.png";
import Comment from "static/imgs/icons/comment@2x.png";

export const handleImgType = (category: string) => {
	switch (category) {
		case CATEGORY.Like:
			return Like;
		case CATEGORY.Logo:
			return Logo;
		case CATEGORY.Add:
			return Add;
		case CATEGORY.Home:
			return Home;
		case CATEGORY.Message:
			return Message;
		case CATEGORY.Comment:
			return Comment;
		default:
			return null;
	}
};

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
