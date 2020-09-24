import {
    GameSettingsActions,
    SET_GAME_STARTED,
    SET_INITIAL_POKEMONS_LOADED,
} from "../types/GameSettingsTypes";

export function setGameStatus(gameStarted: Boolean): GameSettingsActions {
    return {
        type: SET_GAME_STARTED,
        payload: gameStarted,
    }
}

export function setInitialPokemonLoadStatus(pokemonsLoaded: Boolean): GameSettingsActions {
    return {
        type: SET_INITIAL_POKEMONS_LOADED,
        payload: pokemonsLoaded,
    }
}