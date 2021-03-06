import React from "react";

import { Loader } from "../Components/UIElements/Loader";

import { Background } from "../Components/LandingPage/Background";
import { Tools } from "../Components/LandingPage/Tools";
import { NavigationBar } from "../Components/UIElements/NavBar/NavigationBar";
import { Helmet } from "react-helmet";
import { Footer } from "../Components/UIElements/Footer";

export const LandingPage = () => {
    const [loading, setLoading] = React.useState(false);

    return (
        <div>
            <Helmet>
                <title>Online PDF Manager | Home</title>
            </Helmet>

            {loading && (
                <div>
                    <Helmet>
                        <style>{"body { background-color: #060026; }"}</style>
                    </Helmet>
                    <Loader />
                </div>
            )}
            <div
                style={{ display: loading ? "none" : "block", height: "100vh" }}
            >
                <Background setLoading={setLoading} />
                <Tools />
                <NavigationBar />
                <Footer />
            </div>
        </div>
    );
};
