import React from "react";

export const NotFound = () => {
    return (
        <div className="notFoundPage" style={{ height: "100vh" }}>
            <div>
                <h2
                    className="centerText"
                    style={{ color: "white", display: "block" }}
                >
                    Page Not Found!<br></br>
                </h2>
                <h4 className="centerText" style={{ color: "wheat" }}>
                    Uh Oh! Looks like you have hit a roadblock.
                </h4>
                <h4 className="centerText" style={{ color: "wheat" }}>
                    <a href="/#tools" className="notFoundLink">
                        Click here
                    </a>
                    &nbsp; to get right back on track!
                </h4>
            </div>
        </div>
    );
};
