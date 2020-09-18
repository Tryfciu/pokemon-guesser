import React, {FC, useEffect, useState} from "react";
import style from "./NameInput.module.css";

interface NameInputProps {
    setAnswer: Function,
    name: string|undefined,
}

const NameInput: FC<NameInputProps> = ({setAnswer, name}) => {
    useEffect(() => {
        resetInput();
    }, [name]);

    const inputRef = React.useRef<HTMLInputElement|null>(null);

    const resetInput = () => {
        inputRef.current!.value = "";
    }

    const handleChange = (value: string) => {
        setAnswer(value);
    };

    return (
        <input
            className={style.nameInput}
            onChange={(event) => handleChange(event.target.value)}
            ref={inputRef}
        />
    )
}

export default NameInput;