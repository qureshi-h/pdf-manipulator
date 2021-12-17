import React from "react";
import Lottie from "react-lottie";

import animationData from "../../res/loader.json";

export const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="center">
            <Lottie options={defaultOptions} width={"15vw"} />
        </div>
    );
};
