import Chip from "./Chip";

function GameContent() {
    return (
        <div className="h-100 container d-flex align-items-center">
            <div className="h-100 game-body position-relative d-flex align-items-center justify-content-center ">
                <img src={process.env.PUBLIC_URL + '/images/bg-triangle.svg'} alt="triangle-background" className="game-bkg position-absolute" />
                <Chip chipClass="chip-paper" />
                <Chip chipClass="chip-scissors" />
                <Chip chipClass="chip-paper" />
                <Chip chipClass="chip-rock" />
            </div>
        </div>
    )
};

export default GameContent;
