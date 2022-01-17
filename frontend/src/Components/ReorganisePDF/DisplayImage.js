import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { MdDelete } from "react-icons/md";

export const DisplayImage = ({ item, index, onLoad, handleDelete }) => {
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
                                                className="image"
                                                alt={index}
                                            />
                                            <div
                                                className="deleteContainer"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                <MdDelete
                                                    className="delete"
                                                    size="1.5pc"
                                                />
                                            </div>
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
