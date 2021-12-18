import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { DisplayFiles } from "../Components/MergePDF/DisplayFiles";
import { UploadFiles } from "../Components/MergePDF/UploadFiles";

import { NavigationBar } from "../Components/UIElements/NavigationBar";

export const MergePage = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Helmet>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <UploadFiles
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
            />
            {selectedFiles.length > 0 && (
                <DisplayFiles
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                    setLoading={setLoading}
                />
            )}
        </div>
    );
};
