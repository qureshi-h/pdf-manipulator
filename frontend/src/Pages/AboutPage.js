import React from "react";
import { Helmet } from "react-helmet";

import { NavigationBar } from "../Components/UIElements/NavBar/NavigationBar";
import About from "../Components/UIElements/About";

export const AboutPage = () => {
    return (
        <div>
            <Helmet>
                <title>Online PDF Manager | Privacy Policy</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <About />
        </div>
    );
};
