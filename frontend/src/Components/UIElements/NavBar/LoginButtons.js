import React from "react";

export const LoginButtons = ({ setInitialTab, setShowModal }) => {
    return (
        <div
            style={{
                marginRight: "4vw",
                display: "inline-flex",
            }}
        >
            <button
                type="button"
                className="btn btn-primary btn-lg navbarButton"
                onClick={() => {
                    setShowModal(true);
                    setInitialTab("register");
                }}
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
                onClick={() => {
                    setShowModal(true);
                    setInitialTab("login");
                }}
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
    );
};
