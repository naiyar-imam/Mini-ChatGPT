import React from "react";

function ChatInput({ message, setMessage, sendMessage }) {

const handleKey = (e) => {
if (e.key === "Enter") sendMessage();
};

return (

<div className="input-area">

<input
value={message}
onChange={(e) => setMessage(e.target.value)}
onKeyDown={handleKey}
placeholder="Ask anything..."
/>

<button onClick={sendMessage}>
Send
</button>

</div>

);

}

export default ChatInput;