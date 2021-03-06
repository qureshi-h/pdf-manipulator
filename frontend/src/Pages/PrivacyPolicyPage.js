import React from "react";
import { Helmet } from "react-helmet";

import { NavigationBar } from "../Components/UIElements/NavBar/NavigationBar";
import PrivacyPolicy from "../Components/UIElements/PrivacyPolicy";

export const PrivacyPolicyPage = () => {
    return (
        <div>
            <Helmet>
                <title>Online PDF Manager | Privacy Policy</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <PrivacyPolicy />
        </div>
    );
};
