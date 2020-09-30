import React, {FC, useState} from "react";
import style from "./ResultPanel.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";
import {PokemonAnswers} from "../../store/types/PokemonAnswersTypes";

interface ResultPanelProps {
    resetGame: () => void
}

const ResultPanel: FC<ResultPanelProps> = ({resetGame}) => {
    const data = useSelector<RootState, PokemonAnswers>(state => state.pokemonAnswersReducer);
    const [coveredId, setCoveredId] = useState<number|null>(null);

    const {answers} = data;

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
                alt={item.pokemon.name}
            />
            <span
                style={{color: item.correct ? 'green' : 'red'}}
            >
                {item.pokemon.name}
            </span>
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
                    Result
                </div>
                <div
                    className={style.content}
                >
                    {pokemons}
                </div>
                <button
                    className={style.resetButton}
                    onClick={resetGame}
                >
                    menu
                </button>
            </div>
        </div>
    );
};

export default ResultPanel;