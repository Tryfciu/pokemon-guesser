export type GameStatus = 'BEFORE' | 'DURING' | 'AFTER';

export interface GameSettings {
    gameStatus: GameStatus,
    initialPokemonsLoaded: Boolean,
}

export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const SET_INITIAL_POKEMONS_LOADED = 'SET_INITIAL_POKEMONS_LOADED';

interface SetGameStatusAction {
    type: typeof SET_GAME_STATUS,
    payload: GameStatus,
}

interface SetInitialPokemonsLoadedAction {
    type: typeof SET_INITIAL_POKEMONS_LOADED,
    payload: Boolean,
}

export type GameSettingsActions = SetGameStatusAction | SetInitialPokemonsLoadedAction;