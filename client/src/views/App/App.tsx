import React, {FC, useState} from 'react';
import style from './App.module.css';
import GamePanel from "../../components/GamePanel/GamePanel";
import image from "./pokeball.png";

const App: FC = () => {
    const [pokemonsLoaded, setPokemonsLoaded] = useState(false);

    return (
        <>
            <div className={style.blur}/>
            <div
                className={style.app}
            >
                <div
                    className={style.loadingScreen}
                    style={{display: pokemonsLoaded ? 'none' : 'absolute'}}
                >
                    <img
                        className={style.loadingImage}
                        src={image}
                    />
                </div>
                <GamePanel
                    setPokemonsLoaded={setPokemonsLoaded}
                    pokemonsLoaded={pokemonsLoaded}
                />
            </div>
        </>
    );
}

export default App;
