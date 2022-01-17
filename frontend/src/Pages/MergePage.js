import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { DisplayFiles } from "../Components/MergePDF/DisplayFiles";
import { DisplayFile } from "../Components/ReorganisePDF/DisplayFile";
import { UploadFiles } from "../Components/MergePDF/UploadFiles";
import { Loader } from "../Components/UIElements/Loader";

import { NavigationBar } from "../Components/UIElements/NavBar/NavigationBar";

export const MergePage = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [outFile, setOutFile] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Helmet>
                <title>Online PDF Manager | Merge PDFs</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>

            <NavigationBar />
            <UploadFiles
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
                setOutFile={setOutFile}
            />

            {loading ? (
                <Loader />
            ) : (
                <div>
                    {selectedFiles.length > 0 && !outFile && (
                        <DisplayFiles
                            selectedFiles={selectedFiles}
                            setSelectedFiles={setSelectedFiles}
                            setLoading={setLoading}
                            setOutFile={setOutFile}
                        />
                    )}
                    {outFile && <DisplayFile file={outFile} />}
                </div>
            )}
        </div>
    );
};
