import { useContext } from "react"

import { GameContext } from "../context/game-context/gameContext"
import Chip from "./Chip";
import Result from "./Result";

function GamePlay() {
    const { picked, housePicked, gameOver, result } = useContext(GameContext);

    return (
        <div className={`${gameOver ? "game-over" : ""} game-play-container h-100 d-flex justify-content-between`}>
            <div className="d-flex flex-column align-items-center">
                <h4 className="game-title text-light">You Picked</h4>
                <Chip name={picked} win={result === 'win' ? "win" : ""} />
            </div>
            <div className="d-flex flex-column align-items-center">
                <h4 className="game-title text-light">The House Picked</h4>
                <Chip name={housePicked} win={result === 'lose' ? "win" : ""} />
            </div>
            <Result />
        </div>
    )
};

export default GamePlay;
