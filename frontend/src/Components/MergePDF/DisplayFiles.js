import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DisplayFile } from "../MergePDF/DisplayFile";

export const DisplayFiles = ({
    selectedFiles,
    setSelectedFiles,
    setLoading,
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

        formData.append("id", 1);
        formData.append("projectName", "merge");

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append(`images[${i}]`, selectedFiles[i]);
        }
        // fetch("https://server-online-pdf-manager.herokuapp.com/pdf/submitPDF", {
        //     method: "POST",
        //     headers: new Headers({
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     }),
        //     body: JSON.stringify({
        //         images: images.map((images) => images.image),
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         if (data.status_code === 200) {
        //             setOutFile(data.pdf);
        //             setLoading(false);
        //         } else alert(data.status_message);
        //     });
    };

    return (
        <div style={{ marginLeft: "5vw", width: "90vw" }}>
            <div
                style={{
                    width: "95vw",
                    justifyContent: "center",
                    marginLeft: "25vw",
                }}
            >
                <button
                    type="button"
                    className="btn btn-light btn-lg doneButton"
                    onClick={handleDone}
                >
                    <h4 style={{ color: "black" }}>Done</h4>
                </button>
            </div>
            <div
                className="imageContainer"
                style={{ margin: "3vw 0 0 25vw", width: "40vw" }}
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
