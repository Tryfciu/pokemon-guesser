export interface Pokemon {
    id: number,
    order: number,
    name: string,
    imageUrl: string,
}

export interface PokemonAnswer {
    pokemon: Pokemon,
    correct: boolean,
}

export interface PokemonAnswers {
    answers: Array<PokemonAnswer>
}

export const ADD_POKEMON_ANSWER = 'ADD_POKEMON_ANSWER';
export const CLEAR_POKEMON_ANSWERS = 'CLEAR_POKEMON_ANSWERS';

interface AddPokemonAnswerAction {
    type: typeof ADD_POKEMON_ANSWER,
    payload: PokemonAnswer,
}

interface ClearPokemonAnswers {
    type: typeof CLEAR_POKEMON_ANSWERS,
    payload: null,
}

export type PokemonAnswersActions = AddPokemonAnswerAction | ClearPokemonAnswers;