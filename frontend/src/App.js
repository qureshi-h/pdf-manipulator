import "./App.css";
import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import { ReorganisePage } from "./Pages/ReorganisePage";
import { MergePage } from "./Pages/MergePage";
import { PDFToImagePage } from "./Pages/PDFToImagePage";
import { LandingPage } from "./Pages/LandingPage";
import { ImageToPDFPage } from "./Pages/ImageToPDFPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route
                        exact
                        path="/reorganise"
                        element={<ReorganisePage />}
                    />
                    <Route exact path="/merge" element={<MergePage />} />
                    <Route
                        exact
                        path="/pdftoimage"
                        element={<PDFToImagePage />}
                    />
                    <Route
                        exact
                        path="/imagetopdf"
                        element={<ImageToPDFPage />}
                    />
                </Routes>
            </BrowserRouter>
            )
        </div>
    );
}

export default App;
