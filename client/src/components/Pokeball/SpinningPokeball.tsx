import style from "./pokeball.module.css";
import image from "../../views/App/pokeball.png";
import React, {FC} from "react";

interface SpinningPokeballProps {
    stop: boolean,
}

const SpinningPokeball: FC<SpinningPokeballProps> = ({stop}) => {
    return (
        <img
            className={style.loadingImage + (stop ? '' : ' ' + style.rotate)}
            src={image}
            alt="spinning pokeball"
        />
    );
};

export default SpinningPokeball;