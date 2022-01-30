import { combineReducers } from "redux";
import dropReducer from "./dropReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	userReducer,
	dropReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
