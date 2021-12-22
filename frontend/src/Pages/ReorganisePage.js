import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { DisplayFile } from "../Components/ReorganisePDF/DisplayFile";
import { DisplayImages } from "../Components/ReorganisePDF/DisplayImages";
import { UploadFile } from "../Components/ReorganisePDF/UploadFile";
import { Loader } from "../Components/UIElements/Loader";
import { NavigationBar } from "../Components/UIElements/NavigationBar";

export const ReorganisePage = () => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [outFile, setOutFile] = useState(null);

    return (
        <div>
            <Helmet>
                <title>Online PDF Manager | Reorganise PDFs</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <UploadFile
                setImages={setImages}
                setOutFile={setOutFile}
                setLoading={setLoading}
            />

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
