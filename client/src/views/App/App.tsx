import React, {FC, useEffect} from 'react';
import style from './App.module.css';
import GamePanel from "../../components/GamePanel/GamePanel";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";
import {GameSettings} from "../../store/types/GameSettingsTypes";
import Menu from "../../components/Menu/Menu";
import ScorePanel from "../../components/ScorePanel/ScorePanel";
import ResultPanel from "../../components/ResultPanel/ResultPanel";
import {clearPokemonAnswers} from "../../store/actions/PokemonAnswersActions";
import {setGameStatus, setInitialPokemonLoadStatus} from "../../store/actions/GameSettingsActions";
import {fetchPokemons} from "../../store/actions/PokemonsActions";

const App: FC = () => {
    const gameSettings = useSelector<RootState, GameSettings>(state => state.gameSettingsReducer);
    const {initialPokemonsLoaded, gameStatus} = gameSettings;
    const gameReady = gameStatus === 'DURING' && initialPokemonsLoaded;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [])

    const resetGame = () => {
        dispatch(setInitialPokemonLoadStatus(false));
        dispatch(clearPokemonAnswers());
        dispatch(fetchPokemons());
        dispatch(setGameStatus('BEFORE'));
    }

    return (
        <>
            <div className={style.blur}/>
            <div
                className={style.app}
            >
                {gameStatus === 'BEFORE' ? <Menu/> : null}
                <div
                    className={style.middleScreen}
                    style={{display: gameReady ? 'initial' : 'none'}}
                >
                    <GamePanel/>
                </div>
                {gameReady ? (
                    <div
                        className={style.rightScreen}
                    >
                        <ScorePanel/>
                    </div>
                ) : null}
                {gameStatus === 'AFTER' ?
                    <ResultPanel
                        resetGame={resetGame}
                    />
                : null}
            </div>
        </>
    );
}

export default App;
