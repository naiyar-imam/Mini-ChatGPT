import React, { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ chat, loading }) {

const endRef = useRef(null);

useEffect(() => {
endRef.current?.scrollIntoView({ behavior: "smooth" });
}, [chat]);

return (

<div className="chat-window">

{chat.map((msg, index) => (
<MessageBubble key={index} role={msg.role} text={msg.text} />
))}

{loading && (
<div className="message ai">
AI is thinking...
</div>
)}

<div ref={endRef}></div>

</div>

);

}

export default ChatWindow;