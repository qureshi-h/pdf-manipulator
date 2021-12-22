import React from "react";

import { Loader } from "../Components/UIElements/Loader";

import { Background } from "../Components/LandingPage/Background";
import { Tools } from "../Components/LandingPage/Tools";
import { NavigationBar } from "../Components/UIElements/NavigationBar";
import { Helmet } from "react-helmet";

export const LandingPage = () => {
    const [loading, setLoading] = React.useState(true);

    return (
        <div>
            {loading && <Loader />}
            <div style={{ display: loading ? "none" : "block" }}>
                <Helmet>
                    <title>Online PDF Manager - Home</title>
                </Helmet>
                <Background setLoading={setLoading} />
                <Tools />
                <NavigationBar />
            </div>
        </div>
    );
};
