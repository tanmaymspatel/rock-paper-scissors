import { useState } from "react";
import RulesOverlay from "./RulesOverlay";

function Footer() {
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    return (
        <>
            {showOverlay &&
                <RulesOverlay
                    setShowOverlay={setShowOverlay}
                />}
            <div className="container h-100">
                <div className="footer-content">
                    <button className="btn btn-outline-light text-light" onClick={() => setShowOverlay(true)}>
                        <span className="btn-text">
                            RULES
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
};

export default Footer;
