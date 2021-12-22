import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Loader } from "../Components/UIElements/Loader";

import { NavigationBar } from "../Components/UIElements/NavigationBar";
import { UploadImages } from "../Components/ImageToPDF/UploadImages";
import { DisplayFile } from "../Components/ReorganisePDF/DisplayFile";
import { DisplayImages } from "../Components/ReorganisePDF/DisplayImages";

export const ImageToPDFPage = () => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [outFile, setOutFile] = useState(null);

    return (
        <div>
            <Helmet>
                <title>Online PDF Manager | Image to PDF</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <UploadImages setLoading={setLoading} setImages={setImages} />

            {loading ? (
                <Loader />
            ) : (
                <div>
                    {images.length > 0 && !outFile && (
                        <DisplayImages
                            pdfImages={images}
                            setOutFile={setOutFile}
                            setLoading={setLoading}
                        />
                    )}

                    {outFile && <DisplayFile file={outFile} />}
                </div>
            )}
        </div>
    );
};
