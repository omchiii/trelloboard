import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import listReducer from "./listReducer";

export default combineReducers({
	boards: boardReducer,
	lists: listReducer
});
