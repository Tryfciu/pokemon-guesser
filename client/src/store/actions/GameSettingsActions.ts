import {
    GameSettingsActions,
    GameStatus,
    SET_GAME_STATUS,
    SET_INITIAL_POKEMONS_LOADED,
} from "../types/GameSettingsTypes";

export function setGameStatus(gameStatus: GameStatus): GameSettingsActions {
    return {
        type: SET_GAME_STATUS,
        payload: gameStatus,
    }
}

export function setInitialPokemonLoadStatus(pokemonsLoaded: Boolean): GameSettingsActions {
    return {
        type: SET_INITIAL_POKEMONS_LOADED,
        payload: pokemonsLoaded,
    }
}