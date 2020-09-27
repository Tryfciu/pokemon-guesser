import style from "./pokeball.module.css";
import image from "../../views/App/pokeball.png";
import React, {FC} from "react";

const SpinningPokeball: FC = () => {
    return (
        <img
            className={style.loadingImage}
            src={image}
        />
    );
};

export default SpinningPokeball;