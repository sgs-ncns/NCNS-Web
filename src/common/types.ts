export const CATEGORY = {
	Logo: "logo",
	Home: "home",
	Message: "message",
	Add: "add",
	Like: "like",
	Comment: "comment",
} as const;
type CATEGORY = typeof CATEGORY[keyof typeof CATEGORY];

export const REQUEST_BUTTON_TYPE = {
	Post: "post",
	Comment: "comment",
	Follow: "follow",
	UnFollow: "unFollow",
} as const;
type REQUEST_BUTTON_TYPE =
	typeof REQUEST_BUTTON_TYPE[keyof typeof REQUEST_BUTTON_TYPE];
