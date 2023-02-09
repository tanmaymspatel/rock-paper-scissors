import { SetStateAction } from "react";

interface IOverlayProps {
    setShowOverlay: React.Dispatch<SetStateAction<boolean>>
}
function RulesOverlay({ setShowOverlay }: IOverlayProps) {
    return (
        <div className="back-drop d-flex align-items-center justify-content-center" onClick={() => setShowOverlay(false)}>
            <div className="overlay-content bg-light">
                <div className="overlay-header d-flex align-items-center justify-content-between">
                    <h4 className="overlay-title">Rules</h4>
                    <img src={process.env.PUBLIC_URL + '/images/icon-close.svg'} alt="close-overlay" className="cursor-pointer overlay-close" onClick={() => setShowOverlay(false)} />
                </div>
                <img src={process.env.PUBLIC_URL + '/images/image-rules.svg'} alt="rules-of-game" />
            </div>
        </div>
    )
};

export default RulesOverlay;

