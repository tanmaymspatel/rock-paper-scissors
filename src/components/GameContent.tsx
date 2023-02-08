import { useContext } from "react";

import { GameContext } from "../context/game-context/gameContext";
import GameInitialPosition from "./GameInitialPosition";
import GamePlay from "./GamePlay";

function GameContent() {
    const { playing } = useContext(GameContext);
    return (
        <div className="h-100 container d-flex align-items-center">
            {!playing ? <GameInitialPosition /> : <GamePlay />}
        </div>
    )
};

export default GameContent;
