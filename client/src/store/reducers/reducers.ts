import {combineReducers} from "redux";
import gameSettingsReducer from "./GameSettingsReducer";
import pokemonAnswersReducer from "./PokemonAnswersReducer";

const mainReducer = combineReducers({
    gameSettingsReducer,
    pokemonAnswersReducer,
});

export default mainReducer;

export type RootState = ReturnType<typeof mainReducer>;