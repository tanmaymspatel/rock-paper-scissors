import { createContext } from "react";
import { IGameContext } from "./interface";

export const GameContext = createContext<IGameContext>({
    picked: "",
    setPicked: () => { },
    housePicked: "",
    setHousePicked: () => { },
    playing: false,
    setPlaying: () => { },
    chipClickHandler: () => { },
    playAgainHandler: () => { },
    result: "",
    gameOver: false,
    score: 0
}); 