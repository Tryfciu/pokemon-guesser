import React, {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import style from "./GamePanel.module.css";
import NameInput from "./NameInput";

interface GamePanelProps {
    setGameLoaded: Dispatch<SetStateAction<boolean>>,
    gameLoaded: boolean,
}

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

const GamePanel: FC<GamePanelProps> = ({setGameLoaded, gameLoaded}) => {
    const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
    const [previousPokemons, setPreviousPokemons] = useState<Array<PokemonAnswer>>([]);
    const [answer, setAnswer] = useState<string|undefined>(undefined);

    useEffect(() => {
        fetch('http://localhost:8000/api/'
        ).then(res => res.json()
        ).then((pokemons) => {
            setPokemons(pokemons);
            setTimeout(() => {
                setGameLoaded(true);
            }, 2000)
        }).catch(error => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        if(gameLoaded && answer === currentPokemon!.name) {
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
            style={{display: gameLoaded ? 'initial' : 'none'}}
        >
            <div
                className={style.imageContainer}
            >
                {pokemonsImages}
                {gameLoaded ? currentPokemon!.name : null}
            </div>
            <div
                className={style.inputContainer}
            >
                <NameInput
                    setAnswer={setAnswer}
                    name={gameLoaded ? currentPokemon!.name : undefined}
                />
            </div>
        </div>
    );
};

export default GamePanel;