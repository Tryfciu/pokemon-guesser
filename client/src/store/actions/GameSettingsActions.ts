import {
    GameSettingsActions,
    GameStatus,
    INCREMENT_LOADED_IMAGES_AMOUNT,
    RESET_LOADED_IMAGES_AMOUNT,
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

export function incrementLoadedImagesAmount(): GameSettingsActions {
    return {
        type: INCREMENT_LOADED_IMAGES_AMOUNT,
        payload: null,
    }
}

export function resetLoadedImagesAmount(): GameSettingsActions {
    return {
        type: RESET_LOADED_IMAGES_AMOUNT,
        payload: null,
    }
}