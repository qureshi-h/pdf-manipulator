import React from "react";
import { Grid } from "@mui/material";

import { Tool } from "./Tool";
import { ToolsHeader } from "./ToolsHeader";

import reorder from "../../res/Reorder.png";
import merge from "../../res/Merge.png";
import imageToPdf from "../../res/image_to_pdf.png";
import pdfToImage from "../../res/pdf_to_image.png";

import ScrollableAnchor from "react-scrollable-anchor";

export const Tools = () => {
    return (
        <ScrollableAnchor id={"tools"}>
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
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Tool
                                title="Merge PDF"
                                description="Combine multiple pdfs in your specified order into a single pdf document."
                                image={merge}
                                link="/merge"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Tool
                                title="Image To PDF"
                                description="Convert one more more images into a pdf file at the touch of a button."
                                image={imageToPdf}
                                link="/imagetopdf"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Tool
                                title="PDF to Image"
                                description="Convert PDFs to Images and easily download one or more of them."
                                image={pdfToImage}
                                link="/pdftoimage"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ScrollableAnchor>
    );
};
