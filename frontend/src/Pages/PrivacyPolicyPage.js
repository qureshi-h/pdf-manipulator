import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { Loader } from "../Components/UIElements/Loader";
import { NavigationBar } from "../Components/UIElements/NavBar/NavigationBar";
import PrivacyPolicy from "../Components/UIElements/PrivacyPolicy";

export const PrivacyPolicyPage = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Helmet>
                <title>Online PDF Manager | Privacy Policy</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <PrivacyPolicy />
            {loading ? <Loader /> : <div>{}</div>}
        </div>
    );
};
