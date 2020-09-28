import React, {FC, useState} from 'react';
import style from './App.module.css';
import GamePanel from "../../components/GamePanel/GamePanel";
import image from "./pokeball.png";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";
import {GameSettings} from "../../store/types/GameSettingsTypes";
import Menu from "../../components/Menu/Menu";
import SpinningPokeball from "../../components/Pokeball/SpinningPokeball";
import ScorePanel from "../../components/ScorePanel/ScorePanel";
import ResultPanel from "../../components/ResultPanel/ResultPanel";

const App: FC = () => {
    const gameSettings = useSelector<RootState, GameSettings>(state => state.gameSettingsReducer);
    const {initialPokemonsLoaded, gameStatus} = gameSettings;
    const gameReady = gameStatus === 'DURING' && initialPokemonsLoaded;

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
                {gameStatus === 'AFTER' ? <ResultPanel/> : null}
            </div>
        </>
    );
}

export default App;
