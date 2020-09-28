import {Pokemon} from "./PokemonAnswersTypes";

export const LOAD_POKEMONS = 'LOAD_POKEMONS';
export const REMOVE_FIRST_POKEMON = 'REMOVE_FIRST_POKEMON';

export type Pokemons = Array<Pokemon>;

interface LoadPokemonsAction {
    type: typeof LOAD_POKEMONS,
    payload: Pokemons,
}

interface RemoveFirstPokemon {
    type: typeof REMOVE_FIRST_POKEMON,
    payload: null,
}

export type PokemonsActions = LoadPokemonsAction | RemoveFirstPokemon;