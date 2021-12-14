import React from "react";
import { Grid } from "@mui/material";

import { Tool } from "./Tool";
import { ToolsHeader } from "./ToolsHeader";

import reorder from "../../res/Reorder.png";

export const Tools = () => {
    return (
        <div id="Tools">
            <ToolsHeader />
            <div className="tools">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Tool
                            title="Reorganise PDF"
                            description="Rearrange the pages of your pdf in your
                        preferred order in the easiest possible way."
                            image={reorder}
                            link="/reorganise"
                        />{" "}
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Tool
                            title="Reorganise PDF"
                            description="Rearrange the pages of your pdf in your
                        preferred order in the easiest possible way."
                            image={reorder}
                            link="/reorganise"
                        />{" "}
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Tool
                            title="Reorganise PDF"
                            description="Rearrange the pages of your pdf in your
                        preferred order in the easiest possible way."
                            image={reorder}
                            link="/reorganise"
                        />{" "}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
