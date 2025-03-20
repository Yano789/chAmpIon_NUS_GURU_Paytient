import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChatbotProvider } from "./ChatbotContext"; // ✅ Keep the provider here

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChatbotProvider>  {/* ✅ Ensures messages persist */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChatbotProvider>
);
