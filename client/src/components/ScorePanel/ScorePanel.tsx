import React, {FC, useState} from "react";
import style from "./ScorePanel.module.css";
import {PokemonAnswer, PokemonAnswers} from "../../store/types/PokemonAnswersTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";

const ScorePanel: FC = () => {
    const pokemonList = useSelector<RootState, PokemonAnswers>(state => state.pokemonAnswersReducer).answers;

    const points = pokemonList.filter(item => item.correct).length;

    const pokemons = pokemonList.map(pokemon => (
        <div
            className={style.pokemonListItem}
            style={{color: pokemon.correct ? 'white' : 'red'}}
            key={pokemon.pokemon.id}
        >
            {pokemon.pokemon.name}
        </div>
    ));

    return (
        <div
            className={style.scorePanel}
        >
            <div
                className={style.blur}
            />
            <div
                className={style.pointsContainer}
            >
                {points}
            </div>
            <div
                className={style.pokemonList}
            >
                {pokemons}
            </div>
        </div>
    )
};

export default ScorePanel;