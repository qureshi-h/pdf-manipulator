import React, { useEffect, useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

export const DisplayFile = ({ file }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: () => [],
    });

    const [displayFile, setDisplayFile] = useState(file);

    useEffect(() => {
        setDisplayFile(file);
    }, [file]);

    const onDocumentLoad = () => {
        const titleElement = document.getElementById("pdfContainer");
        titleElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="pdf-container" id="pdfContainer">
            <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={displayFile}
                        theme={{ theme: "light" }}
                        onDocumentLoad={onDocumentLoad}
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            </>
        </div>
    );
};
