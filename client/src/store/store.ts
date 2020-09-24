import {createStore} from "redux";
import mainReducer from "./reducers/reducers";

const store = createStore(mainReducer);

export default store;