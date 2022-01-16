import React from "react";

import NoPic from "../../res/NoPic.jpeg";

export const UserProfile = () => {
    return (
        <div
            style={{
                alignItems: "center",
                justifyContent: "right",
                marginRight: "4vw",
                display: "flex",
            }}
            onClick={() => {
                localStorage.setItem("loggedIn", false);
                alert("You have been logged out");
                window.location.reload();
            }}
        >
            <h4 className="userName">
                HELLO, &nbsp; {localStorage.getItem("name")}
            </h4>
            <img
                src={
                    localStorage.getItem("picture") === "none"
                        ? NoPic
                        : localStorage.getItem("picture")
                }
                className="userImage"
                alt="user"
            />
        </div>
    );
};
