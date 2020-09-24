export interface GameSettings {
    gameStarted: Boolean,
    initialPokemonsLoaded: Boolean,
}

export const SET_GAME_STARTED = 'SET_GAME_STARTED';
export const SET_INITIAL_POKEMONS_LOADED = 'SET_INITIAL_POKEMONS_LOADED';

interface SetGameStartedAction {
    type: typeof SET_GAME_STARTED,
    payload: Boolean,
}

interface SetInitialPokemonsLoadedAction {
    type: typeof SET_INITIAL_POKEMONS_LOADED,
    payload: Boolean,
}

export type GameSettingsActions = SetGameStartedAction | SetInitialPokemonsLoadedAction;