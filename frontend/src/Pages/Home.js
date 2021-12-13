import React, { useState } from "react";
import { DisplayFile } from "../Components/DisplayFile";
import { DisplayImages } from "../Components/DisplayImages";
import { UploadFile } from "../Components/UploadFile";

export const Home = () => {
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
