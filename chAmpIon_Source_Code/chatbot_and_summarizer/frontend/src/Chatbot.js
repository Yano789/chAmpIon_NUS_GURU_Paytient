import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useChatbot } from "./ChatbotContext";

function Chatbot() {
    const { messages, setMessages } = useChatbot(); // ✅ Use messages from context
    const [message, setMessage] = useState("");

    const sendMessage = async () => {
        if (!message.trim()) return; // ✅ Prevent sending empty messages

        // Add user message to the chat history
        const newMessages = [...messages, { role: "user", text: message }];
        setMessages(newMessages);

        try {
            const res = await fetch("http://localhost:5001/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            const data = await res.json();

            // Add bot response to the chat history
            setMessages([...newMessages, { role: "bot", text: data.reply }]);
        } catch (error) {
            console.error("Error communicating with chatbot:", error);
        }

        setMessage(""); // ✅ Clear input after sending
    };

    return (
        <div>
            <h2>Medical Chatbot</h2>
            <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type your question..."
            />
            <button onClick={sendMessage}>Send</button>

            <h3>Conversation:</h3>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> 
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Chatbot;
