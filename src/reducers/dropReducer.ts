export const OPEN_NOTIFY_MENU = "OPEN_NOTIFY_MENU";
export const CLOSE_NOTIFY_MENU = "CLOSE_NOTIFY_MENU";
export const OPEN_PROFILE_MENU = "OPEN_PROFILE_MENU";
export const CLOSE_PROFILE_MENU = "CLOSE_PROFILE_MENU";
export const OPEN_FEED = "OPEN_FEED";
export const CLOSE_FEED = "CLOSE_FEED";
export const CLOSE_ALL = "CLOSE_ALL";

// 드롭다운 리듀서입니다.
// notify (알림 창) profile (프로필 메뉴) feed(프로필 마우스 오버 시 미리보기)
// 세 가지의 category를 내포하고 있습니다.

type DropState = {
	showNotify: boolean;
	showProfile: boolean;
	showFeed: boolean;
};

type DropAction = ReturnType<typeof openMenu> | ReturnType<typeof closeMenu>;

const initialState: DropState = {
	showNotify: false,
	showProfile: false,
	showFeed: false,
};

export const openMenu = (category: string) => {
	// console.log(`open ${category}`);
	switch (category) {
		case "notify":
			return { type: OPEN_NOTIFY_MENU };
		case "profile":
			return { type: OPEN_PROFILE_MENU };
		case "feed":
			return { type: OPEN_FEED };
	}
};

export const closeMenu = (category?: string) => {
	// console.log(`close ${category}`);
	switch (category) {
		case "notify":
			return { type: CLOSE_NOTIFY_MENU };
		case "profile":
			return { type: CLOSE_PROFILE_MENU };
		case "feed":
			return { type: CLOSE_FEED };
		default:
			return { type: CLOSE_ALL };
	}
};

const dropReducer = (state: DropState = initialState, action: DropAction) => {
	console.log(action.type);
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
