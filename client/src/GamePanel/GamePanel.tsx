import React, {FC, useEffect, useState} from "react";
import style from "./GamePanel.module.css";

interface Pokemon {
    id: number,
    order: number,
    name: string,
    imageUrl: string,
}

const GamePanel: FC = () => {
    const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/'
        ).then(res => res.json()
        ).then(pokemons => {
            setPokemons(pokemons);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div
            className={style.gamePanel}
        >
            <div
                className={style.imageContainer}
            >
                <img
                    src={pokemons.length > 0 ? pokemons[0].imageUrl : undefined}
                />

            </div>
            <div
                className={style.inputContainer}
            >
                {pokemons.length > 0 ? pokemons[0].name : null}
            </div>
        </div>
    );
};

export default GamePanel;