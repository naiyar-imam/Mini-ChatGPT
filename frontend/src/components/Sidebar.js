import React from "react";

function Sidebar({ chats, newChat, loadChat }){

return(

<div className="sidebar">

<h2>Chats</h2>

<button className="new-chat" onClick={newChat}>
+ New Chat
</button>

<div className="chat-list">

{chats.map((chat,index)=>(
<div
key={index}
className="chat-item"
onClick={()=>loadChat(index)}
>
Chat {index+1}
</div>
))}

</div>

</div>

)

}

export default Sidebar;