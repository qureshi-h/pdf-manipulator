import React, { useState } from "react";

export const UploadFile = ({ setImages }) => {
    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
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

            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    );
};
