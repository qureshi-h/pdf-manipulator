import React, { useState } from "react";

export const UploadFile = ({ setImages, setOutFile, setLoading }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        if (
            event.target.files[0] &&
            event.target.files[0].type === "application/pdf"
        ) {
            setSelectedFile(event.target.files[0]);
            setIsSelected(true);
        } else {
            alert("Please Select a PDF file");
        }
    };

    const handleSubmission = () => {
        setLoading(true);
        const formData = new FormData();

        formData.append("id", 0);
        formData.append("projectName", "zeta");
        formData.append("file", selectedFile);

        fetch("http://localhost:5001/pdf/reorganise/addPDF", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status_code === 200) {
                    setImages(data.images.split("\n").slice(0, -1));
                    setOutFile(null);
                    setLoading(false);
                } else alert(data.status_message);
            });
    };

    return (
        <div className="uploadFile">
            <h2 className="centerText" style={{ color: "white" }}>
                Reorganise PDF
            </h2>
            <h4 className="centerText" style={{ color: "wheat" }}>
                Rearrange the pages of your pdf in your preferred order in the
                easiest possible way.
            </h4>

            <div className="uploadContainer">
                <label
                    htmlFor="file-upload"
                    className="custom-file-upload uploadInput"
                >
                    <i className="fa fa-cloud-upload"></i>Choose a PDF
                </label>
                <input id="file-upload" type="file" onChange={changeHandler} />

                {isSelected && (
                    <h4 className="uploadText">{selectedFile.name}</h4>
                )}

                {isSelected && (
                    <button
                        type="button"
                        className="btn btn-light uploadButton"
                        onClick={handleSubmission}
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
