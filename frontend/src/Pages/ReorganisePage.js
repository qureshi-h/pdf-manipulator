import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { DisplayFile } from "../Components/ReorganisePDF/DisplayFile";
import { DisplayImages } from "../Components/ReorganisePDF/DisplayImages";
import { UploadFile } from "../Components/ReorganisePDF/UploadFile";
import { NavigationBar } from "../Components/UIElements/NavigationBar";

export const ReorganisePage = () => {
    const [images, setImages] = useState([]);
    const [outFile, setOutFile] = useState(null);

    return (
        <div>
            <Helmet>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <UploadFile setImages={setImages} />
            {images.length > 0 && (
                <DisplayImages pdfImages={images} setOutFile={setOutFile} />
            )}
            {/*
            {outFile !== null && <DisplayFile file={outFile} />} */}
        </div>
    );
};
