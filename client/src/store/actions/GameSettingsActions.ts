import {
    GameSettingsActions,
    GameStatus,
    InitialPokemonLoadStatus,
    SET_GAME_STATUS,
    SET_INITIAL_POKEMON_LOAD_STATUS
} from "../types/GameSettingsTypes";

export function setGameStatus(status: GameStatus): GameSettingsActions {
    return {
        type: SET_GAME_STATUS,
        payload: status
    }
}

export function setInitialPokemonLoadStatus(status: InitialPokemonLoadStatus): GameSettingsActions {
    return {
        type: SET_INITIAL_POKEMON_LOAD_STATUS,
        payload: status
    }
}