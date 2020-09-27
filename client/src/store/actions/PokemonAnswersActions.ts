import {ADD_POKEMON_ANSWER, PokemonAnswer, PokemonAnswersActions} from "../types/PokemonAnswersTypes";

export function addPokemonAnswer(pokemonAnswer: PokemonAnswer): PokemonAnswersActions {
    return {
        type: ADD_POKEMON_ANSWER,
        payload: pokemonAnswer
    }
}