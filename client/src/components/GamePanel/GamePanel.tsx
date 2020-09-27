import React, {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import style from "./GamePanel.module.css";
import NameInput from "./NameInput";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";
import {
    GameSettings,
    GameSettingsActions,
    SET_GAME_STARTED,
    SET_INITIAL_POKEMONS_LOADED
} from "../../store/types/GameSettingsTypes";

interface Pokemon {
    id: number,
    order: number,
    name: string,
    imageUrl: string,
}

interface PokemonAnswer {
    pokemon: Pokemon,
    correct: boolean,
}

const GamePanel: FC = () => {
    const gameSettings = useSelector<RootState, GameSettings>(state => state.gameSettingsReducer);
    const {initialPokemonsLoaded} = gameSettings;
    const dispatch = useDispatch();

    const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
    const [previousPokemons, setPreviousPokemons] = useState<Array<PokemonAnswer>>([]);
    const [answer, setAnswer] = useState<string|undefined>(undefined);

    useEffect(() => {
        fetch('http://localhost:8000/api/'
        ).then(res => res.json()
        ).then((pokemons) => {
            setPokemons(pokemons);
            setTimeout(() => {
                dispatch({type: SET_INITIAL_POKEMONS_LOADED, payload: true});
            }, 2000)
        }).catch(error => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        if(initialPokemonsLoaded && answer === currentPokemon!.name) {
            completePokemon(true);
        }
    }, [answer]);

    const completePokemon = (correct: boolean) => {
        const completedPokemon: PokemonAnswer = {pokemon: pokemons.shift()!, correct: correct};
        setPreviousPokemons([...previousPokemons, completedPokemon]);
        setPokemons([...pokemons]);
    }

    const currentPokemon = pokemons.length > 0 ? pokemons[0] : undefined;

    const pokemonsImages = pokemons.map(pokemon => (
        <img
            key={pokemon.id}
            style={{display: pokemon.id === currentPokemon!.id ? 'initial' : 'none'}}
            src={pokemon.imageUrl}
        />
    ));

    return (
        <div
            className={style.gamePanel}
        >
            <div
                className={style.imageContainer}
            >
                {pokemonsImages}
                {initialPokemonsLoaded ? currentPokemon!.name : null}
            </div>
            <div
                className={style.inputContainer}
            >
                <NameInput
                    setAnswer={setAnswer}
                    name={initialPokemonsLoaded ? currentPokemon!.name : undefined}
                />
            </div>
        </div>
    );
};

export default GamePanel;