import {
    ADD_POKEMON_ANSWER,
    CLEAR_POKEMON_ANSWERS,
    PokemonAnswer,
    PokemonAnswersActions
} from "../types/PokemonAnswersTypes";

export function addPokemonAnswer(pokemonAnswer: PokemonAnswer): PokemonAnswersActions {
    return {
        type: ADD_POKEMON_ANSWER,
        payload: pokemonAnswer
    }
}

export function clearPokemonAnswers(): PokemonAnswersActions {
    return {
        type: CLEAR_POKEMON_ANSWERS,
        payload: null
    }
}