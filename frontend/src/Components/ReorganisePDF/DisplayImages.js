import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { Grid } from "@mui/material";

import { DisplayImage } from "./DisplayImage";

export const DisplayImages = ({ pdfImages, setOutFile }) => {
    const [images, SetImages] = useState([]);

    useEffect(() => {
        assignImages();
    }, [pdfImages]);

    useEffect(() => {
        scroll();
    }, []);

    const scroll = () => {
        const titleElement = document.getElementById("displayContainer");
        console.log(titleElement);
        titleElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };

    const assignImages = () => {
        const images = [];
        for (var i = 0; i < pdfImages.length - 1; i++) {
            images.push({ id: uuid(), image: pdfImages[i] });
        }
        SetImages(images);
    };

    const onDragEnd = (result, images, SetImages) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const newOrder = [...images];
        const [removed] = newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, removed);

        SetImages(newOrder);
    };

    const handleDone = () => {
        fetch("http://localhost:5001/pdf/submitPDF", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
            body: JSON.stringify({
                images: images.map((images) => images.image),
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status_code === 200) {
                    setOutFile(data.pdf);
                } else alert(data.status_message);
            });
    };

    return (
        <div style={{ marginLeft: "5vw", width: "90vw" }} id="displayContainer">
            <div style={{ width: "95vw", justifyContent: "center" }}>
                <button
                    type="button"
                    className="btn btn-light btn-lg doneButton"
                    onClick={handleDone}
                >
                    <h4 style={{ color: "black" }}>Done</h4>
                </button>
            </div>

            <div className="imageContainer" id="imageContainer">
                <Grid container spacing={3}>
                    <DragDropContext
                        onDragEnd={(result) =>
                            onDragEnd(result, images, SetImages)
                        }
                    >
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
                                    <DisplayImage item={item} index={index} />
                                </Grid>
                            );
                        })}
                    </DragDropContext>
                </Grid>
            </div>
        </div>
    );
};
