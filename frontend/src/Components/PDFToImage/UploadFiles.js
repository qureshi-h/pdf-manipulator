import React, { useState } from "react";
import { api } from "../../services/api";

export const UploadFiles = ({ setImages, setLoading }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        const files = Array.from(event.target.files).filter(
            (file) => file.type === "application/pdf"
        );
        if (files.length > 0) {
            setSelectedFiles(files);
            setIsSelected(true);
        }
    };

    const handleUpload = () => {
        setLoading(true);
        const formData = new FormData();

        formData.append("id", 0);
        formData.append("projectName", "PDFToImage");

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append("files", selectedFiles[i]);
        }

        api.post("pdf/pdfToImage/addPDF", formData)
            .then((response) => response.json())
            .then((data) => {
                if (data.status_code === 200) {
                    setImages(data.images.split("\n"));
                    setLoading(false);
                } else alert(data.status_message);
            });
    };

    return (
        <div className="uploadFile">
            <h2 className="centerText" style={{ color: "white" }}>
                PDFs to Image
            </h2>
            <h4 className="centerText" style={{ color: "wheat" }}>
                Convert PDFs to Images and easily download one or more of them.
            </h4>
            <div className="uploadContainer">
                <label
                    htmlFor="file-upload"
                    className="custom-file-upload uploadInput"
                >
                    <i className="fa fa-cloud-upload"></i>Choose a PDF
                </label>
                <input
                    id="file-upload"
                    type="file"
                    onChange={changeHandler}
                    multiple
                />

                {isSelected && (
                    <h4 className="uploadText">
                        {selectedFiles[0].name}
                        {selectedFiles.length > 1
                            ? ` and ${selectedFiles.length - 1} more`
                            : ""}
                    </h4>
                )}

                {isSelected && (
                    <button
                        type="button"
                        className="btn btn-light uploadButton"
                        onClick={handleUpload}
                    >
                        <h4
                            style={{
                                color: "black",
                                margin: "auto 1vw auto 1vw",
                            }}
                        >
                            Upload
                        </h4>
                    </button>
                )}
            </div>
        </div>
    );
};
