import * as React from "react";
import { Link } from "react-scroll";

export const Background = ({ setLoading }) => {
    return (
        <div className="background">
            <h1 className="titleText">Online PDF Manager</h1>

            <Link
                activeClass="active"
                to="tools"
                spy={false}
                smooth={true}
                offset={0}
                duration={500}
            >
                <button
                    type="button"
                    className="btn btn-primary btn-lg titleButton"
                >
                    <h4
                        style={{
                            padding: "0vh 1vw 0vh 1vw",
                            height: "100%",
                            alignItems: "center",
                            display: "flex",
                        }}
                    >
                        Get Started
                    </h4>
                </button>
            </Link>
        </div>
    );
};
