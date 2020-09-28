import {LOAD_POKEMONS, Pokemons, PokemonsActions, REMOVE_FIRST_POKEMON} from "../types/PokemonsTypes";
import {Dispatch} from "react";
import {setInitialPokemonLoadStatus} from "./GameSettingsActions";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers/reducers";
import {Action} from "redux";

export function loadPokemons(pokemons: Pokemons): PokemonsActions {
    return {
        type: LOAD_POKEMONS,
        payload: pokemons,
    }
}

export function removeFirstPokemon(): PokemonsActions {
    return {
        type: REMOVE_FIRST_POKEMON,
        payload: null,
    }
}

export function fetchPokemons(): ThunkAction<void, RootState, unknown, Action<string>> {
    return (dispatch) => {
        return fetch('http://localhost:8000/api/')
            .then(res => res.json())
            .then((pokemons) => {
                dispatch(loadPokemons(pokemons));
            }).catch(error => {
            console.log(error);
        })
    };
};