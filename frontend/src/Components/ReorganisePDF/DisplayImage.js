import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

export const DisplayImage = ({ item, index, onLoad }) => {
    return (
        <div style={{ display: "grid" }}>
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
                                background: snapshot.isDraggingOver
                                    ? "lightblue"
                                    : "lightgrey",
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
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                userSelect: "none",
                                                backgroundColor:
                                                    snapshot.isDragging
                                                        ? "#263B4A"
                                                        : "#456C86",
                                                color: "white",
                                                ...provided.draggableProps
                                                    .style,
                                            }}
                                        >
                                            <img
                                                onLoad={onLoad}
                                                src={
                                                    "https://server-online-pdf-manager.herokuapp.com/" +
                                                    item.image
                                                }
                                                style={{
                                                    border: "1px solid black",
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
    );
};
