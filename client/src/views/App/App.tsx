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

const App: FC = () => {
    const gameSettings = useSelector<RootState, GameSettings>(state => state.gameSettingsReducer);
    const {initialPokemonsLoaded, gameStarted} = gameSettings;
    const gameReady = gameStarted && initialPokemonsLoaded;

    return (
        <>
            <div className={style.blur}/>
            <div
                className={style.app}
            >
                {gameStarted ? null : <Menu/>}
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
            </div>
        </>
    );
}

export default App;
