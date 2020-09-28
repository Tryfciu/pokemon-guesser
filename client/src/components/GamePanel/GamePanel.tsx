import React, {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import style from "./GamePanel.module.css";
import NameInput from "./NameInput";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";
import {
    GameSettings,
    SET_INITIAL_POKEMONS_LOADED
} from "../../store/types/GameSettingsTypes";

import {Pokemon, PokemonAnswer} from "../../store/types/PokemonAnswersTypes";
import {setGameStatus, setInitialPokemonLoadStatus} from "../../store/actions/GameSettingsActions";
import {addPokemonAnswer} from "../../store/actions/PokemonAnswersActions";
import ProgressBar from "./ProgressBar";
import {Pokemons, PokemonsActions} from "../../store/types/PokemonsTypes";
import {removeFirstPokemon} from "../../store/actions/PokemonsActions";

const GamePanel: FC = () => {
    const gameSettings = useSelector<RootState, GameSettings>(state => state.gameSettingsReducer);
    const pokemons = useSelector<RootState, Pokemons>(state => state.pokemonsReducer);
    const {initialPokemonsLoaded, gameStatus} = gameSettings;
    const dispatch = useDispatch();

    const [answer, setAnswer] = useState<string|undefined>(undefined);
    const [imagesLoadingCounter, setImagesLoadingCounter] = useState<number>(0);

    useEffect(() => {
        if(gameStatus === 'DURING' && pokemons.length < 1) {
            setImagesLoadingCounter(0);
            dispatch(setGameStatus('AFTER'));
        }
    }, [pokemons])

    useEffect(() => {
        if(initialPokemonsLoaded && answer === currentPokemon!.name) {
            completePokemon(true);
        }
    }, [answer]);

    useEffect(() => {
        if(imagesLoadingCounter >= 20) {
            dispatch(setInitialPokemonLoadStatus(true));
        }
    }, [imagesLoadingCounter])

    const completePokemon = (correct: boolean) => {
        const completedPokemon: PokemonAnswer = {pokemon: pokemons[0], correct: correct};
        dispatch(addPokemonAnswer(completedPokemon));
        dispatch(removeFirstPokemon());
    }

    const handleTimeExceeded = () => {
        completePokemon(false);
    }

    const currentPokemon = initialPokemonsLoaded && gameStatus === 'DURING' ? pokemons[0] : undefined;

    const pokemonsImages = pokemons.map(pokemon => (
        <img
            key={pokemon.id}
            style={{display: pokemon.id === pokemons[0].id ? 'initial' : 'none'}}
            src={pokemon.imageUrl}
            onLoad={() => setImagesLoadingCounter(imagesLoadingCounter + 1)}
        />
    ));

    return (
        <div>
            <div
                className={style.imageContainer}
            >
                {pokemonsImages}
                {currentPokemon ? currentPokemon.name : undefined}
            </div>
            {currentPokemon ? (
                <>
                    <div
                        className={style.progressBarContainer}
                    >
                        <ProgressBar
                            pokemon={currentPokemon}
                            timeExceeded={handleTimeExceeded}
                        />
                    </div>
                    <div
                        className={style.inputContainer}
                    >
                        <NameInput
                            setAnswer={setAnswer}
                            name={currentPokemon.name}
                        />
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default GamePanel;