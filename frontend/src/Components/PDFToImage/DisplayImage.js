import React from "react";
import { baseUrl } from "../../services/api";


export const DisplayImage = ({ image, index, handleChange, onLoad }) => {
    return (
        <div>
            <img
                onLoad={onLoad}
                src={
                    baseUrl +
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
