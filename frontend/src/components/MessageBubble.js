import React from "react";
import ReactMarkdown from "react-markdown";
import { FaCopy } from "react-icons/fa";

function MessageBubble({ role, text, loading }) {

const copyText = () => {
navigator.clipboard.writeText(text);
};

return (

<div className={`message ${role === "user" ? "user" : "ai"}`}>

<ReactMarkdown>{text}</ReactMarkdown>

{loading && role === "ai" && (
<span className="cursor">▌</span>
)}

{role === "ai" && (
<button className="copy-btn" onClick={copyText}>
<FaCopy/>
</button>
)}

</div>

);

}

export default MessageBubble;