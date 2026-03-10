import React from "react";
import { FaMoon } from "react-icons/fa";

function ChatHeader({ toggleTheme }) {

return (

<div className="chat-header">

Mini ChatGPT

<button className="theme-btn" onClick={toggleTheme}>
<FaMoon/>
</button>

</div>

);

}

export default ChatHeader;