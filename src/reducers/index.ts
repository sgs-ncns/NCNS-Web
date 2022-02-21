import { combineReducers } from "redux";
import dropReducer from "./dropReducer";
import followModalReducer from "./followModalReducer";
import modalReducer from "./modalReducer";
import pageWidthReducer from "./pageWidthReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

// 루트 리듀서로 모든 리듀서들을 모아 combine 시켜줍니다.
// useSelector를 사용하기 위한 루트 타입을 반환합니다.

const rootReducer = combineReducers({
	userReducer,
	dropReducer,
	pageWidthReducer,
	modalReducer,
	followModalReducer,
	searchReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
