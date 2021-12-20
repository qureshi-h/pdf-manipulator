import React from "react";

export const DisplayImage = ({ image, index, handleChange }) => {
    console.log(image);
    return (
        <div>
            <img
                src={
                    "https://server-online-pdf-manager.herokuapp.com/" +
                    image.image
                }
                alt="pdf"
                className="pdfToImage"
            />

            <div className="checkBoxContainer">
                <input
                    type="checkbox"
                    className="checkBox"
                    checked={image.checked}
                    onChange={() => handleChange(index)}
                />
            </div>
        </div>
    );
};
