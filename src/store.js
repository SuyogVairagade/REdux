import {createStore} from "redux-toolkit";

import rootReducer from "./reducer";


const store = createStore(rootReducer);

export default store;