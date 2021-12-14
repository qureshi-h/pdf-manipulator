import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

export const DisplayImages = ({ pdfImages, setOutFile }) => {
    const [images, SetImages] = useState([]);

    useEffect(() => {
        assignImages();
    }, [pdfImages]);

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
                console.log(data);
                if (data.status_code === 200) {
                    setOutFile(data.pdf);
                } else alert(data.status_message);
            });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexFlow: "row wrap",
                height: "100%",
            }}
        >
            <div>
                <button onClick={handleDone}>Done</button>
            </div>
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, images, SetImages)}
            >
                {images.map((item, index) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                width: "25%",
                                height: "100%",
                            }}
                            key={index}
                        >
                            <div style={{ margin: 0 }}>
                                <Droppable
                                    droppableId={item.id}
                                    key={item.id}
                                    direction="horizontal"
                                >
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background:
                                                        snapshot.isDraggingOver
                                                            ? "lightblue"
                                                            : "lightgrey",
                                                    height: "0%",
                                                }}
                                            >
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => {
                                                        return (
                                                            <div
                                                                ref={
                                                                    provided.innerRef
                                                                }
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    userSelect:
                                                                        "none",
                                                                    backgroundColor:
                                                                        snapshot.isDragging
                                                                            ? "#263B4A"
                                                                            : "#456C86",
                                                                    color: "white",
                                                                    ...provided
                                                                        .draggableProps
                                                                        .style,
                                                                }}
                                                            >
                                                                <img
                                                                    src={
                                                                        "http://localhost:5001/" +
                                                                        item.image
                                                                    }
                                                                    style={{
                                                                        width: "100%",
                                                                    }}
                                                                    alt={index}
                                                                ></img>
                                                            </div>
                                                        );
                                                    }}
                                                </Draggable>
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
};
