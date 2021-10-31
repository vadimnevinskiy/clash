import React from 'react';
import './App.css';
import Chat from "./components/chat/Chat";
import {io} from "socket.io-client";

function App() {
    let socket = io(`wss://test-chat-backend-hwads.ondigitalocean.app`, {transports: ["websocket"]});
    return (
        <div className="Container">
            <Chat socket={socket} />
        </div>
    );
}

export default App;
