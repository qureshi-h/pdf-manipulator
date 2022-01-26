import "./App.css";
import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import { ReorganisePage } from "./Pages/ReorganisePage";
import { MergePage } from "./Pages/MergePage";
import { PDFToImagePage } from "./Pages/PDFToImagePage";
import { LandingPage } from "./Pages/LandingPage";
import { ImageToPDFPage } from "./Pages/ImageToPDFPage";
import { PrivacyPolicyPage } from "./Pages/PrivacyPolicyPage";
import { NotFoundPage } from "./Pages/NotFoundPage";

import ScrollToTop from "./Components/UIElements/ScrollToTop";
import { AboutPage } from "./Pages/AboutPage";

function App() {
    localStorage.setItem("loggedIn", false);
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/reorganise" element={<ReorganisePage />} />
                    <Route path="/merge" element={<MergePage />} />
                    <Route path="/pdftoimage" element={<PDFToImagePage />} />
                    <Route path="/imagetopdf" element={<ImageToPDFPage />} />
                    <Route
                        path="/privacypolicy"
                        element={<PrivacyPolicyPage />}
                    />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
