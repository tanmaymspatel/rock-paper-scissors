const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const gameResult = (picked: string, housePicked: string) => {
    if (housePicked === picked) return "draw";

    switch (picked) {
        case "rock": {
            if (housePicked === "paper") return "lose";
            if (housePicked === "scissors") return "win";
            break;
        }
        case "paper": {
            if (housePicked === "rock") return "win";
            if (housePicked === "scissors") return "lose";
            break;
        }
        case "scissors": {
            if (housePicked === "rock") return "lose";
            if (housePicked === "paper") return "win";
            break;
        }
        default:
            return null;
    };
};

const gamePlayServices = {
    getRandomNumber,
    gameResult
};

export default gamePlayServices;