import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useChatbot } from "./ChatbotContext"; // ✅ Use existing chatbot context

function Summarizer() {
    const { summary, setSummary } = useChatbot(); // ✅ Now using chatbot context
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    const uploadFile = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("http://localhost:5001/summarize", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            setSummary(data.summary); // ✅ Save in chatbot context, persists across pages
        } catch (error) {
            console.error("Error summarizing file:", error);
            setSummary("Error processing file. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Medical Summarizer</h2>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={uploadFile} disabled={loading}>Summarize</button>

            {loading && <p>Loading... Please wait.</p>}

            <h3>Summary:</h3>
            <ReactMarkdown>{summary}</ReactMarkdown> {/* ✅ Persists across pages */}
        </div>
    );
}

export default Summarizer;
