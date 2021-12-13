import React, { useState } from "react";
import { DisplayFile } from "./DisplayFile";
import { DisplayFile2 } from "./DisplayImages";

export const UploadFile = ({ setImages }) => {
    const [loading, setLoading] = useState(true);
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append("id", 0);
        formData.append("projectName", "zeta");
        formData.append("file", selectedFile);

        fetch("http://localhost:5001/pdf/addPDF", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status_code === 200) {
                    setImages(data.images.split("\n"));
                    setLoading(false);
                } else alert(data.status_message);
            });
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <input type="file" name="file" onChange={changeHandler} />
            {/* {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )} */}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
            {/* {!loading && <DisplayFile2 images={images} />} */}
        </div>
    );
};
