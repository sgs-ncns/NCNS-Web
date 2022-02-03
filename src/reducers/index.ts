import { combineReducers } from "redux";
import dropReducer from "./dropReducer";
import modalReducer from "./modalReducer";
import pageWidthReducer from "./pageWidthReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	userReducer,
	dropReducer,
	pageWidthReducer,
	modalReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
