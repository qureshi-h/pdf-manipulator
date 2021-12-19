import React from "react";
import { v4 as uuid } from "uuid";

export const UploadFiles = ({
    selectedFiles,
    setSelectedFiles,
    setOutFile,
}) => {
    const changeHandler = (event) => {
        const new_files = event.target.files;
        const files = [...selectedFiles];

        for (let i = 0; i < new_files.length; i++) {
            files.push({ id: uuid(), file: new_files[i] });
        }
        setSelectedFiles(files);
        setOutFile(null);
    };

    return (
        <div className="uploadFile">
            <h2 className="centerText" style={{ color: "white" }}>
                Merge PDFs
            </h2>
            <h4 className="centerText" style={{ color: "wheat" }}>
                Combine multiple pdfs in your specified order into a single pdf
                document.
            </h4>

            <label
                htmlFor="file-upload"
                className="custom-file-upload uploadInput mergeInput"
            >
                <i className="fa fa-cloud-upload"></i>Choose one or more PDFs
            </label>
            <input
                id="file-upload"
                type="file"
                onChange={changeHandler}
                multiple
            />
        </div>
    );
};
