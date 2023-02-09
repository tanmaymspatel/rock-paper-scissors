import { useEffect, useState } from "react";
import gamePlayServices from "../../shared/services/gamePlayServices";

import { GameContext } from "./gameContext";

interface IGameProps {
    children: React.ReactNode
};

function GameProvider({ children }: IGameProps) {

    const options = ["rock", "paper", "scissors"];
    const [picked, setPicked] = useState<string>("");
    const [housePicked, setHousePicked] = useState<string>("");
    const [score, setScore] = useState<number>(0);
    const [result, setResult] = useState<string>("");
    const [playing, setPlaying] = useState<boolean>(false);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const { getRandomNumber, gameResult } = gamePlayServices;

    const launchHousePick = () => {
        return new Promise((resolve) => {
            let pick: string;
            pick = options[getRandomNumber(0, 3)];
            // const interval = setInterval(() => {
            //     setHousePicked(pick);
            // }, 75);

            setTimeout(() => {
                // clearInterval(interval);
                setHousePicked(pick);
                resolve(pick);
            }, 1000);
        });
    };

    const chipClickHandler = async (name: string) => {
        setPicked(name);
        setPlaying(true);
        await launchHousePick();
    };

    const playAgainHandler = () => {
        setPlaying(false);
        setResult("");
        setGameOver(false);
        setHousePicked("");
    };

    useEffect(() => {
        if (picked && housePicked) {
            const finalResult: any = gameResult(picked, housePicked);
            setResult(finalResult);
            setGameOver(true);
        };
        if (result === "win") {
            setScore(prev => prev + 1)
        };
    }, [picked, housePicked, result, gameResult]);

    const gameCtx = {
        picked,
        setPicked,
        housePicked,
        setHousePicked,
        playing,
        setPlaying,
        chipClickHandler,
        playAgainHandler,
        result,
        gameOver,
        score
    };

    return (
        <GameContext.Provider value={gameCtx}>
            {children}
        </GameContext.Provider>
    )
};

export default GameProvider;
