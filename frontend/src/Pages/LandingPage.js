import React from "react";
import { Background } from "../Components/LandingPage/Background";
import { Tools } from "../Components/LandingPage/Tools";
import { NavigationBar } from "../Components/UIElements/NavigationBar";

export const LandingPage = () => {
    return (
        <div>
            <Background />
            <Tools />
            <NavigationBar />
        </div>
    );
};
