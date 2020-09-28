import {
    GameSettings,
    GameSettingsActions,
    INCREMENT_LOADED_IMAGES_AMOUNT,
    RESET_LOADED_IMAGES_AMOUNT,
    SET_GAME_STATUS,
    SET_INITIAL_POKEMONS_LOADED
} from "../types/GameSettingsTypes";
import {Reducer} from "react";

const gameSettingsReducer: Reducer<GameSettings, GameSettingsActions> = (
    state: GameSettings = {gameStatus: 'BEFORE', initialPokemonsLoaded: false, loadedImages: 0, pokemonsAmount: 20},
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
        case INCREMENT_LOADED_IMAGES_AMOUNT:
            return {
                ...state,
                loadedImages: state.loadedImages+1,
            };
        case RESET_LOADED_IMAGES_AMOUNT:
            return {
                ...state,
                loadedImages: 0,
            };
        default:
            return state;
    }
};

export default gameSettingsReducer;
