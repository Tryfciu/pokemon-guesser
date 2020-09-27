import {
    GameSettings,
    GameSettingsActions,
    SET_GAME_STARTED,
    SET_INITIAL_POKEMONS_LOADED
} from "../types/GameSettingsTypes";
import {Reducer} from "react";
import {Simulate} from "react-dom/test-utils";

const gameSettingsReducer: Reducer<GameSettings, GameSettingsActions> = (
    state: GameSettings = {gameStarted: false, initialPokemonsLoaded: false},
    action: GameSettingsActions
) => {
    switch(action.type) {
        case SET_GAME_STARTED:
            return {
                ...state,
                gameStarted: action.payload
            };
        case SET_INITIAL_POKEMONS_LOADED:
            return {
                ...state,
                initialPokemonsLoaded: action.payload
            }
        default:
            return state;
    }
};

export default gameSettingsReducer;
