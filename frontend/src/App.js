import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

import "./App.css";

function App(){

const [message,setMessage] = useState("");
const [chat,setChat] = useState([]);
const [loading,setLoading] = useState(false);
const [dark,setDark] = useState(false);

const [chats,setChats] = useState([]);
const [currentChat,setCurrentChat] = useState(0);


const toggleTheme = ()=>{
setDark(!dark);
document.body.classList.toggle("dark");
};


const newChat = ()=>{
setChats([...chats, chat]);
setChat([]);
setCurrentChat(chats.length);
};


const loadChat = (index)=>{
setCurrentChat(index);
setChat(chats[index]);
};


const sendMessage = async ()=>{

if(!message.trim()) return;

const userMsg = {role:"user", text:message};

setChat(prev => [...prev, userMsg]);

setLoading(true);

// create empty AI message placeholder
const aiMsg = {role:"ai", text:""};

setChat(prev => [...prev, aiMsg]);

try{

const response = await fetch(
"http://localhost:8000/chat-stream",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
}
);


const reader = response.body.getReader();
const decoder = new TextDecoder("utf-8");

let done = false;

while(!done){

const {value, done:doneReading} = await reader.read();

done = doneReading;

const chunk = decoder.decode(value || new Uint8Array());

setChat(prev => {

const updated = [...prev];

updated[updated.length - 1].text += chunk;

return updated;

});

}

}catch(err){

setChat(prev => [
...prev,
{role:"ai", text:"Server error"}
]);

}

setLoading(false);
setMessage("");

};


return(

<div className="app-layout">

<Sidebar 
chats={chats}
newChat={newChat}
loadChat={loadChat}
/>

<div className="chat-section">

<ChatHeader toggleTheme={toggleTheme}/>

<ChatWindow chat={chat} loading={loading}/>

<ChatInput
message={message}
setMessage={setMessage}
sendMessage={sendMessage}
/>

</div>

</div>

);

}

export default App;