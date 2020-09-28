import {combineReducers} from "redux";
import gameSettingsReducer from "./GameSettingsReducer";
import pokemonAnswersReducer from "./PokemonAnswersReducer";
import pokemonsReducer from "./PokemonsReducer";

const mainReducer = combineReducers({
    gameSettingsReducer,
    pokemonAnswersReducer,
    pokemonsReducer,
});

export default mainReducer;

export type RootState = ReturnType<typeof mainReducer>;