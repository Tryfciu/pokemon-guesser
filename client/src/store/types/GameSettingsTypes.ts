export type GameStatus = "WAITING" | "STARTED"
export type InitialPokemonLoadStatus = "LOADING" | "FINISHED"

export interface GameSettings {
    gameStatus: GameStatus,
    initialPokemonLoadStatus: InitialPokemonLoadStatus,
}

export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const SET_INITIAL_POKEMON_LOAD_STATUS = 'SET_INITIAL_POKEMON_LOAD_STATUS';

interface SetGameStatusAction {
    type: typeof SET_GAME_STATUS,
    payload: GameStatus,
}

interface SetInitialPokemonLoadStatusAction {
    type: typeof SET_INITIAL_POKEMON_LOAD_STATUS,
    payload: InitialPokemonLoadStatus,
}

export type GameSettingsActions = SetGameStatusAction | SetInitialPokemonLoadStatusAction;