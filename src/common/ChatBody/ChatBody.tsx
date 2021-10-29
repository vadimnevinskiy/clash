import React, {useEffect, useRef, useState} from 'react';
import cls from "./ChatBody.module.css";
import MessageText from "../MessageText/MessageText";
import MessageHeader from "../MessageHeader/MessageHeader";
import avatar1 from "../../assets/img/avatar1.png";
import CircularProgress from '@mui/material/CircularProgress';

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {io} from "socket.io-client";
import {Message} from "../../types/historyMessages";
import Time from "../Time/Time";

let socket = io(`wss://test-chat-backend-hwads.ondigitalocean.app`, {transports: ["websocket"]});


interface PropsType {
    text: string
}

const ChatBody: React.FC<PropsType> = ({text}) => {
    const {historyMessages, limit, skip, error} = useTypedSelector(state => state.historyMessages)
    const {fetchHistoryMessages, setMessage} = useActions()
    const [socketConnected, setSocketConnected] = useState<true | false>(true)
    const chatBodyRef = React.useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    //imitation of disconnect
    const imitation = () => {
        setTimeout(() => {
            socket.disconnect()
        }, 30000)
        setTimeout(() => {
            socket.connect()
        }, 60000)
    }

    //Socket check connection
    useEffect(() => {
        socket = socket.connect()
        socket.on('connect', function() {
            setSocketConnected(socket.connected)
            socket.on('disconnect', function(){
                setSocketConnected(socket.connected)
            });
            socket.on('message', (data) => {
                console.log("Отправляем сообщение!", data)
                setMessage(data)
            });
        });
        // imitation()
    }, [])


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

            if(socketConnected) {
                setMessage(newMessage)
                socket.emit('message', {from: 'meVadim', text: text})
            }
        }
    }, [text])



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





    const getRandomInt = () => {
        return (Math.floor(Math.random() * (1 - 10)) + 10);
    }


    if (error) return <div><h1>{error}</h1></div>

    return (
        <div className={cls.chatBody} ref={chatBodyRef}>
            {
                historyMessages.map((message, index) => {
                    return (
                        <div key={message.id + index}>
                            {
                                message.from !== 'me' &&
                                <div className={cls.message}>
                                    <div className={cls.messageBlock}>
                                        {
                                            message.from &&
                                            <MessageHeader avatar={avatar1} avatarColor={'#DD8A26'}
                                                           userName={message.from}
                                                           userRating={getRandomInt()}/>

                                        }
                                        index={index + 1}<br/>
                                        {message.id}<br/><br/>
                                        <MessageText text={message.text}/>
                                    </div>
                                    {
                                        message.createdAt &&
                                        <Time createdAt={message.createdAt} />
                                    }
                                </div>
                            }
                            {
                                message.from === 'me' &&
                                <div className={cls.message + ' ' + cls.myMessage}>
                                    {
                                        message.createdAt &&
                                        <Time createdAt={message.createdAt} />
                                    }
                                    <div className={cls.messageBlock}>
                                        <MessageText text={message.text}/>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }

            {!socketConnected && <div className={cls.progress}>Connection ... <CircularProgress sx={{color: '#ffffff'}} /></div>}
            <div className={cls.messagesEndRef} ref={messagesEndRef}></div>
        </div>
    );
};

export default ChatBody;
