import {Reducer} from "react";
import {ADD_POKEMON_ANSWER, PokemonAnswer, PokemonAnswers, PokemonAnswersActions} from "../types/PokemonAnswersTypes";

const pokemonAnswersReducer: Reducer<PokemonAnswers, PokemonAnswersActions> = (
    state: PokemonAnswers = {answers: [] as Array<PokemonAnswer>},
    action: PokemonAnswersActions
) => {
    switch(action.type) {
        case ADD_POKEMON_ANSWER:
            return {
                answers: [
                    ...state.answers,
                    action.payload
                ]
            };
        default:
            return state;
    }
};

export default pokemonAnswersReducer;