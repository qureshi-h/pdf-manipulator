import React from "react";

export const DisplayImage = ({ image, index, handleChange }) => {
    return (
        <div>
            <img src={image.image} alt="pdf" className="pdfToImage" />

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
