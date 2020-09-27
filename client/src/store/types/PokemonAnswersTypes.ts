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

interface AddPokemonAnswerAction {
    type: typeof ADD_POKEMON_ANSWER,
    payload: PokemonAnswer,
}

export type PokemonAnswersActions = AddPokemonAnswerAction;