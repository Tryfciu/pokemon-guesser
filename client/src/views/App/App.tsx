import React, {FC, useState} from 'react';
import style from './App.module.css';
import GamePanel from "../../components/GamePanel/GamePanel";
import image from "./pokeball.png";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";
import {GameSettings} from "../../store/types/GameSettingsTypes";
import Menu from "../../components/Menu/Menu";
import SpinningPokeball from "../../components/Pokeball/SpinningPokeball";

const App: FC = () => {
    const gameSettings = useSelector<RootState, GameSettings>(state => state.gameSettingsReducer);
    const {initialPokemonsLoaded, gameStarted} = gameSettings;

    return (
        <>
            <div className={style.blur}/>
            <div
                className={style.app}
            >
                {gameStarted ? null : <Menu/>}
                <div
                    style={{display: gameStarted && initialPokemonsLoaded ? 'initial' : 'none'}}
                >
                    <GamePanel/>
                </div>
            </div>
        </>
    );
}

export default App;
