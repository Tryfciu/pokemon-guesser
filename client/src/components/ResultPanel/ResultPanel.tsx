import React, {FC, useState} from "react";
import style from "./ResultPanel.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";
import {PokemonAnswer, PokemonAnswers} from "../../store/types/PokemonAnswersTypes";

const ResultPanel: FC = () => {
    const data = useSelector<RootState, PokemonAnswers>(state => state.pokemonAnswersReducer);
    const [coveredId, setCoveredId] = useState<number|null>(null);

    // const answers: Array<PokemonAnswer> = [];

    const {answers} = data;

    // for(let i=0;i<20;i++) {
    //     answers.push({
    //         correct: true,
    //         pokemon: {imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", order: 20, id: 20, name: "Squirtle"}
    //     })
    // }

    const pokemons = answers.map(item => (
        <div
            className={style.pokemonItem}
            key={item.pokemon.id}
        >
            <img
                src={item.pokemon.imageUrl}
                className={style.pokemonImage + (coveredId === item.pokemon.id ? ' ' + style.rotation : '')}
                onMouseEnter={() => setCoveredId(item.pokemon.id)}
                onMouseLeave={() => setCoveredId(null)}
            />
            {item.pokemon.name}
        </div>
    ));

    return (
        <div
            className={style.resultPanel}
        >
            <div
                className={style.blur}
            />
            <div
                className={style.resultData}
            >
                <div
                    className={style.title}
                >
                    Podsumowanie
                </div>
                <div
                    className={style.content}
                >
                    {pokemons}
                </div>
                <button>
                    zacznij od nowa
                </button>
            </div>
        </div>
    );
};

export default ResultPanel;