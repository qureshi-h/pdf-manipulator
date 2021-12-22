import React from "react";
import { Link } from "react-router-dom";
import { Link as Lynk } from "react-scroll";

import logo from "../../res/Logo2.png";

export const NavigationBar = () => {
    return (
        <div className="navbar">
            <div
                style={{
                    alignItems: "left",
                    justifyContent: "left",
                    marginRight: "4vw",
                }}
            >
                <Link to="/">
                    <img className="navbarLogo" src={logo} alt="logo" />
                </Link>

                <Link to="/">
                    <h4 className="navbarText">Home</h4>
                </Link>

                <Lynk
                    activeClass="active"
                    to="Tools"
                    spy={false}
                    smooth={false}
                    offset={0}
                    duration={500}
                >
                    <Link to="/">
                        <h4 className="navbarText">Tools</h4>{" "}
                    </Link>
                </Lynk>

                <h4 className="navbarText">About</h4>
            </div>

            <div
                style={{
                    alignItems: "right",
                    justifyContent: "right",
                    marginRight: "4vw",
                }}
            >
                <button
                    type="button"
                    className="btn btn-primary btn-lg navbarButton"
                >
                    <h4
                        style={{
                            padding: "0vh 1.5vw 0vh 1.5vw",
                            height: "100%",
                            alignItems: "center",
                            display: "flex",
                        }}
                    >
                        Sign Up
                    </h4>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg navbarButton"
                >
                    <h4
                        style={{
                            padding: "0vh 1.5vw 0vh 1.5vw",
                            height: "100%",
                            alignItems: "center",
                            display: "flex",
                        }}
                    >
                        Login
                    </h4>
                </button>
            </div>
        </div>
    );
};
