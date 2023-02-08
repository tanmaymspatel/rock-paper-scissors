export interface IGameContext {
    picked: string;
    setPicked: React.Dispatch<React.SetStateAction<string>>,
    housePicked: string;
    setHousePicked: React.Dispatch<React.SetStateAction<string>>,
    playing: boolean,
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    chipClickHandler: (name: string) => void,
    playAgainHandler: () => void,
    result: string,
    gameOver: boolean,
    score: number
}