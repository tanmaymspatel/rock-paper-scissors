import { useContext } from "react";
import { GameContext } from "../context/game-context/gameContext";

interface IChipProps {
    name: string,
    win?: string
}
function Chip({ name, win }: IChipProps) {

    const { playing, chipClickHandler } = useContext(GameContext);

    return (
        <div className={`chip-${!name ? "default" : name} ${win} ${!playing ? "position-absolute chip-hover cursor-pointer chip-before" : "position-relative chip-after pointer-events-none"} chip-container d-flex align-items-center justify-content-center border-circle`}
            onClick={() => chipClickHandler(name)}
        >
            <div className="inner-circle d-flex align-items-center justify-content-center border-circle">
                <img src={process.env.PUBLIC_URL + `/images/icon-${name}.svg`} alt="triangle-background"
                    className={`${!name ? "d-none" : ""} ${playing ? "img-game-play" : ""}`} />
            </div>
        </div>
    )
};

export default Chip;
