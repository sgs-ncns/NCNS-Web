export const SAVE_POST_ID_LIST = "SAVE_POST_ID_LIST";
export const DELETE_POST_ID_LIST = "DELETE_POST_ID_LIST";

// 드롭다운 리듀서입니다.
// notify (알림 창) profile (프로필 메뉴) feed(프로필 마우스 오버 시 미리보기)
// 세 가지의 category를 내포하고 있습니다.

type SearchState = {
	postIdList: Array<number>;
};

type SaveAction = ReturnType<typeof saveList>;

const initialState: SearchState = {
	postIdList: null,
};

export const saveList = (postIdList: Array<number>) => {
	return { type: SAVE_POST_ID_LIST, postIdList };
};

export const deleteList = () => {
	return { type: DELETE_POST_ID_LIST };
};

const searchReducer = (
	state: SearchState = initialState,
	action: SaveAction,
) => {
	switch (action.type) {
		case SAVE_POST_ID_LIST:
			return {
				...state,
				postIdList: [...action.postIdList],
			};
		case DELETE_POST_ID_LIST:
			return {
				...state,
				postIdList: null,
			};
		default:
			return state;
	}
};

export default searchReducer;
