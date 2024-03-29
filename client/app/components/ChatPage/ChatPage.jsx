'use client'
import './chatPage.css'
import { useState, useEffect } from "react";
import io from 'socket.io-client';

//instances

const socket = io('http://localhost:5000');

export default function ChatPage() {

    const [messages, setMessage] = useState([]);
    const [messageInput, setMessageInput] = useState('');

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
        <div className='container chatContainer'>
            <div className='userCnt'>
                <p>user online : <span className='green'>{userCount}</span></p>
            </div>


            {/* rendering all the messages */}

            <div className='chatPage'>

                <div className='messages'>
                    {messages.map((message, index) => (
                        <div key={index}>
                            {message}
                        </div>
                    ))}
                </div>
                
            </div>

            <div className='messageBox'>
                <input className='inputArea' type="text" value={messageInput} placeholder="Type your message..."
                    onChange={(e) => setMessageInput(e.target.value)}
                />

                <button className="sendButton green" onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
