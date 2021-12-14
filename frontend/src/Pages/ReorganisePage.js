import React, { useState } from "react";
import { DisplayFile } from "../Components/ReorganisePDF/DisplayFile";
import { DisplayImages } from "../Components/ReorganisePDF/DisplayImages";
import { UploadFile } from "../Components/ReorganisePDF/UploadFile";

export const ReorganisePage = () => {
    const [images, setImages] = useState([]);
    const [outFile, setOutFile] = useState(null);

    return (
        <div>
            <UploadFile setImages={setImages} />
            {images.length > 0 && (
                <DisplayImages pdfImages={images} setOutFile={setOutFile} />
            )}
            {outFile !== null && <DisplayFile file={outFile} />}
        </div>
    );
};
