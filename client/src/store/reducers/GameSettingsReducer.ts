import {
    GameSettings,
    GameSettingsActions,
    SET_GAME_STATUS,
    SET_INITIAL_POKEMON_LOAD_STATUS
} from "../types/GameSettingsTypes";
import {Reducer} from "react";

const gameSettingsReducer: Reducer<GameSettings, GameSettingsActions> = (
    state: GameSettings = {gameStatus: "WAITING", initialPokemonLoadStatus: "LOADING"},
    action: GameSettingsActions
) => {
    switch(action.type) {
        case SET_GAME_STATUS:
            state.gameStatus = action.payload;
            return state;
        case SET_INITIAL_POKEMON_LOAD_STATUS:
            state.initialPokemonLoadStatus = action.payload;
            return state;
        default:
            return state;
    }
};

export default gameSettingsReducer;
