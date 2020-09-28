import {
    GameSettings,
    GameSettingsActions,
    SET_GAME_STATUS,
    SET_INITIAL_POKEMONS_LOADED
} from "../types/GameSettingsTypes";
import {Reducer} from "react";

const gameSettingsReducer: Reducer<GameSettings, GameSettingsActions> = (
    state: GameSettings = {gameStatus: 'BEFORE', initialPokemonsLoaded: false},
    action: GameSettingsActions
) => {
    switch(action.type) {
        case SET_GAME_STATUS:
            return {
                ...state,
                gameStatus: action.payload
            };
        case SET_INITIAL_POKEMONS_LOADED:
            return {
                ...state,
                initialPokemonsLoaded: action.payload
            };
        default:
            return state;
    }
};

export default gameSettingsReducer;
