import React from "react";
import { LogInBox } from "./LogInBox";

import logo from "../../../res/Logo2.png";
// import { LoginButtons } from "./LoginButtons";
import { UserProfile } from "./UserProfile";
import { ToolsDropdown } from "./ToolsDropdown";

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
                        display: "inline",
                    }}
                >
                    <a href="/">
                        <img className="navbarLogo" src={logo} alt="logo" />
                    </a>

                    <a href="/" className="navbarText">
                        Home
                    </a>

                    <ToolsDropdown />

                    <a href="/about" className="navbarText">
                        About
                    </a>
                </div>

                {/* {localStorage.getItem("loggedIn") === "true" ? (
                    <UserProfile />
                ) : (
                    <LoginButtons
                        setShowModal={setShowModal}
                        setInitialTab={setInitialTab}
                    />
                )} */}
            </div>
            <LogInBox
                showModal={showModal}
                initialTab={initialTab}
                setShowModel={setShowModal}
            />
        </div>
    );
};
