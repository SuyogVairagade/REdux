import changeCount from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {changeCount},
) ;

export default rootReducer;