interface IChipProps {
    chipClass: string;
}
function Chip({ chipClass }: IChipProps) {

    const chipImage = (chipClass: string) => {
        switch (chipClass) {
            case "chip-paper":
                return '/images/icon-paper.svg'
            case "chip-rock":
                return '/images/icon-rock.svg'
            case "chip-scissors":
                return '/images/icon-scissors.svg';
            default:
                return null;
        }
    }
    return (
        <div className={`${chipClass} chip-container position-absolute d-flex align-items-center justify-content-center border-circle cursor-pointer`}>
            <div className="inner-circle d-flex align-items-center justify-content-center border-circle">
                <img src={process.env.PUBLIC_URL + chipImage(chipClass)} alt="triangle-background" />
            </div>
        </div>
    )
};

export default Chip;
