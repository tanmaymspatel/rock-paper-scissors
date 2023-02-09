import Chip from "./Chip";

function GameInitialPosition() {
    return (
        <div className="h-100 game-body position-relative d-flex align-items-center justify-content-center ">
            <img src={process.env.PUBLIC_URL + '/images/bg-triangle.svg'} alt="triangle-background" className="game-bkg position-absolute" />
            <Chip name="paper" />
            <Chip name="scissors" />
            <Chip name="rock" />
        </div>
    )
};

export default GameInitialPosition;
