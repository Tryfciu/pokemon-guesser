import React, {FC, useEffect, useState} from "react";
import style from "./ProgressBar.module.css";
import {Pokemon} from "../../store/types/PokemonAnswersTypes";

interface ProgressBarProps {
    pokemon: Pokemon,
    timeExceeded: () => void
}

const ProgressBar: FC<ProgressBarProps> = ({pokemon, timeExceeded}) => {
    const timeToGuess = 10;
    const [spentTime, setSpentTime] = useState(0);
    const leftTimePercentage = ((spentTime/timeToGuess) * 100)+'%';

    useEffect(() => {
        if(spentTime >= timeToGuess) {
            timeExceeded();
        } else {
            const interval = setInterval(() => {
                setSpentTime(spentTime + 30);
            }, 30);

            return () => clearInterval(interval);
        }
    }, [spentTime]);

    useEffect(() => {
        setSpentTime(0);
    }, [pokemon])

    return (
        <div
            className={style.progressBar}
        >
            <div
                className={style.progressBarFill}
                style={{width: leftTimePercentage}}
            />
        </div>
    );
};

export default ProgressBar;