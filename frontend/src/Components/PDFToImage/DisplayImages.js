import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Element, scroller } from "react-scroll";
import { DisplayImage } from "./DisplayImage";

export const DisplayImages = ({ all_images }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        assignImages();
    }, []);

    const assignImages = () => {
        const image_list = [];

        for (var i = 0; i < all_images.length - 1; i++) {
            image_list.push({ checked: true, image: all_images[i] });
        }

        setImages(image_list);
    };

    const handleChange = (index) => {
        const image_list = [...images];
        image_list[index].checked = !image_list[index].checked;

        console.log(image_list);

        setImages(image_list);
    };

    return (
        <Element name="scroll-to-element">
            <div
                style={{ marginLeft: "5vw", width: "90vw" }}
                id="displayContainer"
            >
                <div style={{ width: "95vw", justifyContent: "center" }}>
                    <button
                        type="button"
                        className="btn btn-light btn-lg doneButton"
                        // onClick={handleDone}
                    >
                        <h4
                            style={{
                                color: "black",
                                margin: "auto 1vw auto 1vw",
                            }}
                        >
                            Done
                        </h4>
                    </button>
                </div>

                <div className="imageContainer" id="imageContainer">
                    <Grid container spacing={3}>
                        {images.map((item, index) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    lg={2}
                                    key={index}
                                >
                                    <DisplayImage
                                        image={item}
                                        index={index}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </div>
        </Element>
    );
};
