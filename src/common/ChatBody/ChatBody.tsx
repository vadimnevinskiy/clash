import React, {useEffect, useRef, useState} from 'react';
import cls from "./ChatBody.module.css";
import MessageText from "../MessageText/MessageText";
import MessageHeader from "../MessageHeader/MessageHeader";
import avatar1 from "../../assets/img/avatar1.png";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {io} from "socket.io-client";
import {Message} from "../../types/historyMessages";

let socket = io(`wss://test-chat-backend-hwads.ondigitalocean.app`, {transports: ["websocket"]});


interface PropsType {
    text: string
}

const ChatBody: React.FC<PropsType> = ({text}) => {
    const {historyMessages, limit, skip, error, loading} = useTypedSelector(state => state.historyMessages)
    const {fetchHistoryMessages, setMessage, setLimitAndSkip} = useActions()

    const chatBodyRef = React.useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);


    // If sent new message from form
    useEffect(() => {
        if (text) {
            const nowDate = new Date()
            const newMessage: Message = {
                from: 'me',
                createdAt: nowDate.toISOString(),
                id: Math.random().toString(16).slice(2),
                text: text
            }
            setMessage(newMessage)
            socket.emit('message', {from: 'meVadim', text: text})
        }
    }, [text])


    //Listening server socket
    useEffect(() => {
        socket.on('message', (data) => {
            console.log("Пушим Данные!", data)
            setMessage(data)
        });
    }, [])


    //Add event listener when scrolling chat
    useEffect(() => {
        fetchHistoryMessages(limit, skip)
        chatBodyRef.current!.addEventListener('scroll', scrollHandler)
        // return function () {
        //     chatBodyRef.current!.removeEventListener('scroll', scrollHandler)
        // }
    }, [])


    //if updated historyMessages, go to bottom of chat
    useEffect(() => {
        chatBodyRef.current!.scrollTop = chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight
    }, [historyMessages])


    //Fetching new portion messages
    let count = 0
    const fetchingPortion = () => {
        count = count + 15
        fetchHistoryMessages(limit, count)
    }


    //If scrolled chat at top, fetching new portion messages
    const scrollHandler = (e: any) => {
        if (e.target.scrollTop === 0) {
            fetchingPortion()
        }
    }


    if (error) return <div><h1>{error}</h1></div>

    return (
        <div className={cls.chatBody} ref={chatBodyRef}>
            {
                historyMessages.map((message, index) => {
                    function getDateTime(createdAt: string) {
                        const d = new Date(createdAt);
                        const minutes = d.getUTCMinutes().toString()
                        if (minutes.length < 2) {
                            return d.getUTCHours() + ':' + '0' + minutes
                        }
                        return d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getSeconds()
                    }


                    return (
                        <div key={message.id + index}>
                            {
                                message.from !== 'me' &&
                                <div className={cls.message}>
                                    <div className={cls.messageBlock}>
                                        {
                                            message.from &&
                                            <MessageHeader avatar={avatar1} avatarColor={'#DD8A26'} userName={message.from}
                                                           userRating={Math.floor(Math.random() * 5)}/>

                                        }
                                        index={index + 1}<br/>
                                        {message.id}<br/><br/>
                                        <MessageText text={message.text}/>
                                    </div>
                                    <div className={cls.messageTime}>
                                        {
                                            message.createdAt &&
                                            getDateTime(message.createdAt)
                                        }
                                    </div>
                                </div>
                            }
                            {
                                message.from === 'me' &&
                                <div className={cls.message + ' ' + cls.myMessage}>
                                    <div className={cls.messageTime}>
                                        {
                                            message.createdAt &&
                                            getDateTime(message.createdAt)
                                        }
                                    </div>
                                    <div className={cls.messageBlock}>
                                        <MessageText text={message.text}/>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }


            <div className={cls.messagesEndRef} ref={messagesEndRef}></div>
        </div>
    );
};

export default ChatBody;
