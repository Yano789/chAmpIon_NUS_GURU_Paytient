import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import Summarizer from "./Summarizer";

function App() {
    return (
        <>
            <nav>
                <Link to="/">Chatbot</Link> | <Link to="/summary">Summary</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Chatbot />} />
                <Route path="/summary" element={<Summarizer />} />
            </Routes>
        </>
    );
}

export default App;
