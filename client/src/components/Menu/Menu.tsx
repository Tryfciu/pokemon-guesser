import React, {FC} from "react";
import style from "./Menu.module.css";
import {useDispatch, useSelector} from "react-redux";
import {GameSettings} from "../../store/types/GameSettingsTypes";
import {RootState} from "../../store/reducers/reducers";
import SpinningPokeball from "../Pokeball/SpinningPokeball";
import {setGameStatus} from "../../store/actions/GameSettingsActions";

const Menu: FC = () => {
    const dispatch = useDispatch();
    const gameSettings = useSelector<RootState, GameSettings>((state) => state.gameSettingsReducer);
    const {initialPokemonsLoaded, loadedImages, pokemonsAmount} = gameSettings;

    const startSoloGame = () => {
        dispatch(setGameStatus('DURING'));
    };

    const loadingPokeballs = Array.from({length: pokemonsAmount}).map((v, index) => (
        <div
            className={style.pokeballContainer}
            key={index}
        >
            <SpinningPokeball
                stop={index < loadedImages}
            />
        </div>
    ));

    return (
        <div
            className={style.menu}
        >
            <div
                className={style.menuCard + " " + style.singleplayerCard}
            >
                <div
                    className={style.loadingContainer}
                >
                    {loadingPokeballs}
                </div>
                <button
                    className={style.gameButton}
                    onClick={startSoloGame}
                    disabled={!initialPokemonsLoaded}
                >
                    Solo game
                </button>
            </div>
            <div
                className={style.menuCard + " " + style.multiplayerCard}
            >
                <div
                    className={style.multiplayerSection}
                >
                    <button
                        className={style.gameButton}
                        disabled={true}
                    >
                        New multiplayer game
                    </button>
                </div>
                <hr/>
                <div
                    className={style.multiplayerSection}
                >
                    <input
                        className={style.codeInput}
                        placeholder="multiplayer code"
                        disabled={true}
                    />
                    <button
                        className={style.gameButton}
                        disabled={true}
                    >
                        Join multiplayer game
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;