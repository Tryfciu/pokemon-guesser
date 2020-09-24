import React, {FC} from "react";
import style from "./Menu.module.css";
import {useDispatch} from "react-redux";
import {SET_GAME_STARTED} from "../../store/types/GameSettingsTypes";

const Menu: FC = () => {
    const dispatch = useDispatch();

    const startSoloGame = () => {
        dispatch({type: SET_GAME_STARTED, payload: true});
    };

    return (
        <div
            className={style.menu}
        >
            <div
                className={style.menuCard + " " + style.singleplayerCard}
            >
                <button
                    className={style.gameButton}
                    onClick={startSoloGame}
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
                    />
                    <button
                        className={style.gameButton}
                    >
                        Join multiplayer game
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;