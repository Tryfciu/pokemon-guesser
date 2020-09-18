import React, {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import style from "./GamePanel.module.css";
import NameInput from "./NameInput";

interface GamePanelProps {
    setPokemonsLoaded: Dispatch<SetStateAction<boolean>>,
    pokemonsLoaded: boolean,
}

interface Pokemon {
    id: number,
    order: number,
    name: string,
    imageUrl: string,
}

const GamePanel: FC<GamePanelProps> = ({setPokemonsLoaded, pokemonsLoaded}) => {
    const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
    const [previousPokemons, setPreviousPokemons] = useState<Array<Pokemon&{correct: boolean}>>([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/'
        ).then(res => res.json()
        ).then((pokemons) => {
            setPokemons(pokemons);
            setTimeout(() => {
                setPokemonsLoaded(true);
            }, 2000)
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const isActive = (id: number) => {
        return pokemons[0].id === id;
    }

    const completePokemon = (correct: boolean) => {
        pokemons.shift()
        setPokemons(pokemons);
    }

    return (
        <div
            className={style.gamePanel}
            style={{display: pokemonsLoaded ? 'initial' : 'none'}}
        >
            <div
                className={style.imageContainer}
            >
                {pokemons.map(pokemon => (
                    <img
                        key={pokemon.id}
                        style={{display: isActive(pokemon.id) ? 'initial' : 'none'}}
                        src={pokemon.imageUrl}
                    />
                ))}

            </div>
            <div
                className={style.inputContainer}
            >
                <NameInput
                    name={pokemons.length > 0 ? pokemons[0].name : "nazwa"}
                />
            </div>
        </div>
    );
};

export default GamePanel;