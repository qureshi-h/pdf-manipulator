import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DisplayFile } from "../MergePDF/DisplayFile";

export const DisplayFiles = ({
    selectedFiles,
    setSelectedFiles,
    setLoading,
    setOutFile,
}) => {
    const handleDelete = (id) => {
        setSelectedFiles(selectedFiles.filter((item) => item.id !== id));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const newOrder = [...selectedFiles];
        const [removed] = newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, removed);

        setSelectedFiles(newOrder);
    };

    const handleDone = () => {
        setLoading(true);
        const formData = new FormData();

        formData.append("id", 0);
        formData.append("projectName", "merge");

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append("files", selectedFiles[i].file);
        }

        fetch("http://localhost:5001/pdf/merge/addPDF", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status_code === 200) {
                    setOutFile(data.pdf);
                    setLoading(false);
                    setSelectedFiles([]);
                } else alert(data.status_message);
            });
    };

    const handleClear = () => {
        setSelectedFiles([]);
    };

    return (
        <div style={{ marginLeft: "5vw", width: "90vw" }}>
            <div
                style={{
                    width: "95vw",
                    marginLeft: "25vw",
                    display: "inline-flex",
                }}
            >
                <button
                    type="button"
                    className="btn btn-light btn-lg doneButton"
                    onClick={handleDone}
                >
                    <h4 style={{ color: "black" }}>Done</h4>
                </button>

                <button
                    type="button"
                    className="btn btn-light btn-lg clearButton"
                    onClick={handleClear}
                >
                    <h4 style={{ color: "black" }}>Clear</h4>
                </button>
            </div>
            <div
                className="imageContainer"
                style={{ margin: "2vw 0 0 25vw", width: "40vw" }}
            >
                <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
                    {selectedFiles.map((item, index) => {
                        return (
                            <DisplayFile
                                item={item}
                                index={index}
                                handleDelete={handleDelete}
                                key={index}
                            />
                        );
                    })}
                </DragDropContext>
            </div>
        </div>
    );
};
