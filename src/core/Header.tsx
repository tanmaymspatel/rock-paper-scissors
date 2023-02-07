function Header() {
    return (
        <div className="container h-100 d-flex align-items-center">
            <div className="header-content d-flex align-items-center justify-content-between">
                <h2 className="header-title text-light">
                    <span className="header-title-text">Rock</span>
                    <span className="header-title-text">Paper</span>
                    <span className="header-title-text">Scissors</span>
                </h2>
                <div className="score bg-light">
                    <p className="score-title">Score</p>
                    <p className="score-value">12</p>
                </div>
            </div>
        </div>
    )
};

export default Header;
