import React, {FC} from 'react';
import style from './App.module.css';
import GamePanel from "../GamePanel/GamePanel";

const App: FC = () => {
  return (
    <div
        className={style.app}
    >
      <GamePanel/>
    </div>
  );
}

export default App;
