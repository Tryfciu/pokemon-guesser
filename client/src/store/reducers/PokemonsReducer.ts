import {Reducer} from "react";
import {LOAD_POKEMONS, Pokemons, PokemonsActions, REMOVE_FIRST_POKEMON} from "../types/PokemonsTypes";
import {Pokemon} from "../types/PokemonAnswersTypes";

const pokemonsReducer: Reducer<Pokemons, PokemonsActions> = (
    state = [] as Array<Pokemon>,
    action: PokemonsActions
) => {
    switch(action.type) {
        case LOAD_POKEMONS:
            return action.payload;
        case REMOVE_FIRST_POKEMON:
            state.shift();
            return [
                ...state
            ];
        default:
            return state;
    }
}

export default pokemonsReducer;