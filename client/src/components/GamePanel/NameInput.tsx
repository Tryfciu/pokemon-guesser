import React, {FC} from "react";
import style from "./NameInput.module.css";

interface NameInputProps {
    name: string,
}

const NameInput: FC<NameInputProps> = ({name}) => {
    return (
        <input
            className={style.nameInput}
        />
    )
}

export default NameInput;