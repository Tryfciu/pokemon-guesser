export type GameStatus = 'BEFORE' | 'DURING' | 'AFTER';

export interface GameSettings {
    gameStatus: GameStatus,
    initialPokemonsLoaded: Boolean,
    loadedImages: number,
    pokemonsAmount: number,
}

export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const SET_INITIAL_POKEMONS_LOADED = 'SET_INITIAL_POKEMONS_LOADED';
export const INCREMENT_LOADED_IMAGES_AMOUNT = 'INCREMENT_LOADED_IMAGES_AMOUNT';
export const RESET_LOADED_IMAGES_AMOUNT = 'RESET_LOADED_IMAGES_AMOUNT';

interface SetGameStatusAction {
    type: typeof SET_GAME_STATUS,
    payload: GameStatus,
}

interface SetInitialPokemonsLoadedAction {
    type: typeof SET_INITIAL_POKEMONS_LOADED,
    payload: Boolean,
}

interface IncrementLoadedImagesAmount {
    type: typeof INCREMENT_LOADED_IMAGES_AMOUNT,
    payload: null,
}

interface ResetLoadedImagesAmount {
    type: typeof RESET_LOADED_IMAGES_AMOUNT,
    payload: null,
}

export type GameSettingsActions = SetGameStatusAction
    | SetInitialPokemonsLoadedAction
    | IncrementLoadedImagesAmount
    | ResetLoadedImagesAmount;