import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { MdDelete } from "react-icons/md";

export const DisplayFile = ({ item, index, handleDelete }) => {
    return (
        <div>
            <Droppable droppableId={item.id} key={item.id} direction="vertical">
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
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <h4 className="mergeText">
                                                {item.file.name}
                                            </h4>
                                            <MdDelete
                                                className="deleteIcon"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            />
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
