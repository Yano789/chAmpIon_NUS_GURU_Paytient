import React, { createContext, useContext, useState } from "react";

const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
    // ✅ Keep messages and summary in memory (will reset on restart)
    const [messages, setMessages] = useState([]);
    const [summary, setSummary] = useState("");

    return (
        <ChatbotContext.Provider value={{ messages, setMessages, summary, setSummary }}>
            {children}
        </ChatbotContext.Provider>
    );
};

export const useChatbot = () => useContext(ChatbotContext);
