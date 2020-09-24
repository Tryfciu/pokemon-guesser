import React, {FC, useState} from 'react';
import style from './App.module.css';
import GamePanel from "../../components/GamePanel/GamePanel";
import image from "./pokeball.png";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";
import {GameSettings} from "../../store/types/GameSettingsTypes";
import Menu from "../../components/Menu/Menu";

const App: FC = () => {
    const gameSettings = useSelector<RootState, GameSettings>(state => state.gameSettingsReducer);
    const {initialPokemonsLoaded, gameStarted} = gameSettings;
    const loading = gameStarted && !initialPokemonsLoaded;

    return (
        <>
            <div className={style.blur}/>
            <div
                className={style.app}
            >
                <div
                    style={{display: gameStarted ? 'none' : 'block'}}
                >
                    <Menu/>
                </div>
                <div
                    className={style.loadingScreen}
                    style={{display: loading ? 'flex' : 'none'}}
                >
                    <img
                        className={style.loadingImage}
                        src={image}
                    />
                </div>
                <GamePanel/>
            </div>
        </>
    );
}

export default App;
