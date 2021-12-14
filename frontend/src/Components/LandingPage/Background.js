import * as React from "react";

import background from "../../res/LandingPage.jpg";

export const Background = () => {
    return (
        <div style={{ display: "inline-block" }}>
            <img
                className="backgroundImage"
                src={background}
                alt={"Background"}
            />
            <h1 className="titleText">Online PDF Manager</h1>
            <button type="button" class="btn btn-primary btn-lg titleButton">
                <h4 className="center">Get Started</h4>
            </button>
        </div>
    );
};
