import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { DisplayFiles } from "../Components/MergePDF/DisplayFiles";
import { DisplayFile } from "../Components/ReorganisePDF/DisplayFile";
import { UploadFiles } from "../Components/PDFToImage/UploadFiles";
import { Loader } from "../Components/UIElements/Loader";

import { NavigationBar } from "../Components/UIElements/NavigationBar";
import { DisplayImages } from "../Components/PDFToImage/DisplayImages";

export const PDFToImagePage = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Helmet>
                <title>Online PDF Manager - PDF to Image</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <UploadFiles setLoading={setLoading} setImages={setImages} />

            {loading ? (
                <Loader />
            ) : (
                <div>
                    {images.length > 0 && <DisplayImages all_images={images} />}
                </div>
            )}
        </div>
    );
};