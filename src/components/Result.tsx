import { useContext } from "react";

import { GameContext } from "../context/game-context/gameContext";

function Result() {

    const { playAgainHandler, result, gameOver } = useContext(GameContext);

    return (
        <div className={`${gameOver ? "game-over" : ""} result-box position-absolute`}>
            <h1 className="result-title text-light">{result === "lose" ? "You Lose" : (result === "win" ? "You Won" : "Draw")}</h1>
            <button className="btn btn-light" onClick={playAgainHandler}>
                <span className="btn-text">Play Again</span>
            </button>
        </div>
    )
};

export default Result;
