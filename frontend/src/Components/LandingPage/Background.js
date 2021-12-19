import * as React from "react";
import { Link } from "react-scroll";

import background from "../../res/LandingPage.jpg";

export const Background = () => {
    return (
        <div className="background">
            <img
                className="backgroundImage"
                src={background}
                alt={"Background"}
            />

            <h1 className="titleText">Online PDF Manager</h1>

            <Link
                activeClass="active"
                to="Tools"
                spy={false}
                smooth={true}
                offset={0}
                duration={500}
            >
                <button
                    type="button"
                    className="btn btn-primary btn-lg titleButton"
                >
                    <h4 style={{ padding: "0vh 1vw 0vh 1vw" }}>Get Started</h4>
                </button>
            </Link>
        </div>
    );
};
