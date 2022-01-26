import React from "react";
import { Helmet } from "react-helmet";

import { NavigationBar } from "../Components/UIElements/NavBar/NavigationBar";
import { NotFound } from "../Components/UIElements/NotFound";

export const NotFoundPage = () => {
    return (
        <div>
            <Helmet>
                <title>Online PDF Manager | Reorganise PDFs</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <NotFound />
        </div>
    );
};
