import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { Grid } from "@mui/material";
import { scroller } from "react-scroll";

import { DisplayImage } from "./DisplayImage";

export const DisplayImages = ({ pdfImages, setOutFile, setLoading }) => {
    const [images, SetImages] = useState([]);

    useEffect(() => {
        assignImages();
    }, [pdfImages]);

    const scroll = () => {
        scroller.scrollTo("displayContainer", {
            duration: 800,
            delay: 0,
            smooth: "smooth",
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
        setLoading(true);

        fetch(
            "https://server-online-pdf-manager.herokuapp.com/pdf/reorganise/submitPDF",
            {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }),
                body: JSON.stringify({
                    images: images.map((images) => images.image),
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.status_code === 200) {
                    setOutFile(data.pdf);
                    setLoading(false);
                } else alert(data.status_message);
            });
    };

    const handleDelete = (id) => {
        SetImages(images.filter((image) => image.id !== id));
    };

    return (
        <div style={{ marginLeft: "5vw", width: "90vw" }} id="displayContainer">
            <div style={{ width: "95vw", justifyContent: "center" }}>
                <button
                    type="button"
                    className="btn btn-light btn-lg doneButton"
                    onClick={handleDone}
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
                                    <DisplayImage
                                        item={item}
                                        index={index}
                                        onLoad={scroll}
                                        handleDelete={handleDelete}
                                    />
                                </Grid>
                            );
                        })}
                    </DragDropContext>
                </Grid>
            </div>
        </div>
    );
};
