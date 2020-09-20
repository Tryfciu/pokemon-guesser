import {combineReducers} from "redux";
import gameSettingsReducer from "./GameSettingsReducer";

const mainReducer = combineReducers({
    gameSettingsReducer,
});

export default mainReducer;

export type RootState = ReturnType<typeof mainReducer>;