import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import { ReorganisePage } from "./Pages/ReorganisePage";
import { LandingPage } from "./Pages/LandingPage";

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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
