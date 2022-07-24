import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/reset.css";
import "./App.css";
import Home from "./pages/Home.page";
import "./styles/animations.css";
import Availablity from "./pages/Availability.page";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:titleId" element={<Availablity />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
