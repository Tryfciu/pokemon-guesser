import {LOAD_POKEMONS, Pokemons, PokemonsActions, REMOVE_FIRST_POKEMON} from "../types/PokemonsTypes";
import {Dispatch} from "react";
import {setInitialPokemonLoadStatus} from "./GameSettingsActions";

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

export function fetchPokemons() {
    return (dispatch: any) => {
        return fetch('http://localhost:8000/api/')
            .then(res => res.json())
            .then((pokemons) => {
                dispatch(loadPokemons(pokemons));
            }).catch(error => {
            console.log(error);
        })
    };
};