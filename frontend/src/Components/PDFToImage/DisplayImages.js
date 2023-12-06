import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { scroller } from "react-scroll";
import { api, baseUrl } from "../../services/api";
import { DisplayImage } from "./DisplayImage";

export const DisplayImages = ({ all_images, setLoading }) => {
    const [images, setImages] = useState([]);

    const downloadZip = (url) => {
        fetch(url).then((response) => {
            response.blob().then((blob) => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = url;
                a.download = "images.zip";
                a.click();
            });
        });
    };

    const handleDone = () => {
        setLoading(true);
        api.post_json(
            "pdf/pdfToImage/zipImages",
            JSON.stringify({
                images: images
                    .filter((image) => image.checked)
                    .map((image) => image.image),
            })
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.status_code === 200) {
                    downloadZip(baseUrl + data.zip);
                    setLoading(false);
                } else alert(data.status_message);
            });
    };

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

        setImages(image_list);
    };

    const scroll = () => {
        scroller.scrollTo("displayContainer", {
            duration: 800,
            delay: 0,
            smooth: "smooth",
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
                            <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                                <DisplayImage
                                    image={item}
                                    index={index}
                                    handleChange={handleChange}
                                    onLoad={scroll}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </div>
    );
};
