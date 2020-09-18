import React, {FC, useState} from 'react';
import style from './App.module.css';
import GamePanel from "../../components/GamePanel/GamePanel";
import image from "./pokeball.png";

const App: FC = () => {
    const [gameLoaded, setGameLoaded] = useState(false);

    return (
        <>
            <div className={style.blur}/>
            <div
                className={style.app}
            >
                <div
                    className={style.loadingScreen}
                    style={{display: gameLoaded ? 'none' : 'absolute'}}
                >
                    <img
                        className={style.loadingImage}
                        src={image}
                    />
                </div>
                <GamePanel
                    setGameLoaded={setGameLoaded}
                    gameLoaded={gameLoaded}
                />
            </div>
        </>
    );
}

export default App;
