'use client'

import { useState, useEffect } from "react";
import io from 'socket.io-client';

//instances

const socket = io('https://anony-chat-backend.vercel.app');

export default function ChatPage() {

    const [messages, setMessage] = useState([]);
    const [messageInput, setMessageInput] =useState('');

    useEffect(() => {
        socket.on('message', (message) => {
            setMessage([...messages, message]);
        })

        return () => {
            socket.off("message")
        }
    }, [messages]);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', messageInput);
            setMessageInput("");
        }
    }

    //user count
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {

        socket.on('userCount', (userCount) => {
            setUserCount(userCount);
        })
        
    }, [userCount])


  return (
    <div>
        <h1>Simple Chat App</h1>

        <p>user count : {userCount}</p>

        <input type="text" value={messageInput} placeholder="Type your message..."
        onChange={(e) => setMessageInput(e.target.value) }
        />

        <button onClick={sendMessage}>Send Message</button>

        {/* rendering all the messages */}

        <section>
            {messages.map((message, index) => (
                <div key={index}>
                    {message}
                </div>
            ))}
        </section>
    </div>
  )
}
