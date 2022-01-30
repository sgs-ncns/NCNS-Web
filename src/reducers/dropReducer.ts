export const OPEN_NOTIFY_MENU = "OPEN_NOTIFY_MENU";
export const CLOSE_NOTIFY_MENU = "CLOSE_NOTIFY_MENU";
export const OPEN_PROFILE_MENU = "OPEN_PROFILE_MENU";
export const CLOSE_PROFILE_MENU = "CLOSE_PROFILE_MENU";
export const OPEN_FEED = "OPEN_FEED";
export const CLOSE_FEED = "CLOSE_FEED";
export const CLOSE_ALL = "CLOSE_ALL";

type dropState = {
	showNotify: boolean;
	showProfile: boolean;
	showFeed: boolean;
};

type dropAction = ReturnType<typeof openMenu> | ReturnType<typeof closeMenu>;

const initialState: dropState = {
	showNotify: false,
	showProfile: false,
	showFeed: false,
};

export const openMenu = (category: string) => {
	console.log(`open ${category}`);
	switch (category) {
		case "notify":
			return { type: OPEN_NOTIFY_MENU };
		case "profile":
			return { type: OPEN_PROFILE_MENU };
		case "feed":
			return { type: OPEN_FEED };
	}
};

export const closeMenu = (category: string) => {
	console.log(`close ${category}`);
	switch (category) {
		case "notify":
			return { type: CLOSE_NOTIFY_MENU };
		case "profile":
			return { type: CLOSE_PROFILE_MENU };
		case "feed":
			return { type: CLOSE_FEED };
	}
};

const dropReducer = (state: dropState = initialState, action: dropAction) => {
	switch (action.type) {
		case OPEN_NOTIFY_MENU:
			return {
				...state,
				showNotify: true,
			};
		case CLOSE_NOTIFY_MENU:
			return {
				...state,
				showNotify: false,
			};
		case OPEN_PROFILE_MENU:
			return {
				...state,
				showProfile: true,
			};
		case CLOSE_PROFILE_MENU:
			return {
				...state,
				showProfile: false,
			};
		case OPEN_FEED:
			return {
				...state,
				showFeed: true,
			};
		case CLOSE_FEED:
			return {
				...state,
				showFeed: false,
			};
		case CLOSE_ALL:
			return {
				...state,
				showNotify: false,
				showProfile: false,
				showFeed: false,
			};
		default:
			return state;
	}
};

export default dropReducer;
