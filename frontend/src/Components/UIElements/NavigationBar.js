import React from "react";
import { Link } from "react-router-dom";
import { LogInBox } from "./LogInBox";

import logo from "../../res/Logo2.png";
import { LoginButtons } from "./LoginButtons";
import { UserProfile } from "./UserProfile";

export const NavigationBar = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [initialTab, setInitialTab] = React.useState("login");

    return (
        <div>
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
                    <Link to="/#tools">
                        <h4 className="navbarText">Tools</h4>
                    </Link>
                    <h4 className="navbarText">About</h4>
                </div>

                {localStorage.getItem("loggedIn") === "true" ? (
                    <UserProfile />
                ) : (
                    <LoginButtons
                        setShowModal={setShowModal}
                        setInitialTab={setInitialTab}
                    />
                )}
            </div>
            <LogInBox
                showModal={showModal}
                initialTab={initialTab}
                setShowModel={setShowModal}
            />
        </div>
    );
};
