import React from "react";
import Lottie from "react-lottie-player";

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
        <div className="loader">
            <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: 230, height: 230 }}
            />
        </div>
    );
};
