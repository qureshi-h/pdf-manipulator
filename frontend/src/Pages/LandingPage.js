import React from "react";
import { Background } from "../Components/LandingPage/Background";
import { Tools } from "../Components/LandingPage/Tools";
import { NavigationBar } from "../Components/UIElements/NavigationBar";
import { Helmet } from "react-helmet";

export const LandingPage = () => {
    return (
        <div>
            <Helmet>
                <title>Online PDF Manager - Home</title>
            </Helmet>
            <Background />
            <Tools />
            <NavigationBar />
        </div>
    );
};
