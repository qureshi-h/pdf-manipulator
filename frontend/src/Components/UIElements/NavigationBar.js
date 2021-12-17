import React from "react";
import { Link } from "react-router-dom";

import logo from "../../res/Logo2.png";

export const NavigationBar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbarLogo" src={logo} alt="logo" />
            </Link>

            <Link to="/">
                <h4 className="navbarText">Home</h4>
            </Link>

            <h4 className="navbarText">Tools</h4>
            <h4 className="navbarText">About</h4>

            <div style={{ marginLeft: "45vw", display: "inline-block" }}>
                <button
                    type="button"
                    className="btn btn-primary btn-lg navbarButton"
                >
                    <h4>Sign Up</h4>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg navbarButton"
                >
                    <h4>Login</h4>
                </button>
            </div>
        </div>
    );
};
