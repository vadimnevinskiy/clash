import React, {useEffect, useRef, useState} from 'react';
import {Socket} from "socket.io-client";

import cls from "./ChatBody.module.css";
import {Message} from "../../types/historyMessages";
import PreloaderConnection from "../PreloaderConnection/PreloaderConnection";
import MessageItem from "../MessageItem/MessageItem";


import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";






interface PropsType {
    newMessage: string
    socket: Socket
}

const ChatBody: React.FC<PropsType> = ({newMessage, socket}) => {
    const {historyMessages, limit, skip, error} = useTypedSelector(state => state.historyMessages)
    const chatBodyRef = React.useRef<HTMLDivElement>(null);
    const lastMessageRef = React.useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const {fetchHistoryMessages, setMessage} = useActions()
    const [viewHistory, setViewHistory] = useState<boolean>(false)
    const [socketConnected, setSocketConnected] = useState<true | false>(true)
    const [lastPosition, setLastPosition] = useState<number>(0)

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
                setMessage(data)
            });
        });
        // imitation()
    }, [])


    // If sent new message from Form
    useEffect(() => {
        if (newMessage) {
            const nowDate = new Date()
            const message: Message = {
                from: 'me',
                createdAt: nowDate.toISOString(),
                id: Math.random().toString(16).slice(2),
                text: newMessage
            }
            if (socketConnected) {
                setMessage(message)
                socket.emit('message', {from: 'meVadim', text: newMessage})
            }
        }
    }, [newMessage])


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
        if (!viewHistory) {
           //If view realtime chat, set scroll to the end of the list messages
            chatBodyRef.current!.scrollTop = chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight
        }
        if (viewHistory) {
            //If view history, set scroll to the first message in the last portion
            chatBodyRef.current!.scrollTop = lastPosition
        }
    }, [historyMessages])


    //Fetching new portion messages
    let count = 0
    const fetchingPortion = () => {
        count = count + 15
        fetchHistoryMessages(limit, count)
    }

    const toggleHistoryFlag = (scrollTop: number, scrollHeight: number, clientHeight: number) => {
        if (scrollTop < scrollHeight - clientHeight) {
            //If started scrolling the page, set the flag viewHistory == true
            setViewHistory(true)
        } else if (scrollTop === scrollHeight - clientHeight) {
            //If scroll position at bottom, set the flag viewHistory == false
            setViewHistory(false)
        }
    }

    //If scrolled chat at top, fetching new portion messages
    const scrollHandler = (e: any) => {
        const scrollTop = e.target.scrollTop //Высота верхней невидимой области контента за пределами блока
        const scrollHeight = chatBodyRef.current!.scrollHeight //Общая высота контента
        const clientHeight = chatBodyRef.current!.clientHeight //Высота видимой части блока

        //If scroll position at top, fetching new portion of messages
        if (e.target.scrollTop === 0) {
            fetchingPortion()
        }

        //If started scrolling chat, remember last message on the list
        if (scrollTop < (scrollHeight - clientHeight) && scrollTop > (scrollHeight - clientHeight - 10)) {
            setLastPosition(lastMessageRef.current!.offsetTop)
        }

        toggleHistoryFlag(scrollTop, scrollHeight, clientHeight)

    }




    if (error) return <div><h1>{error}</h1></div>

    return (
        <div className={cls.chatBody} ref={chatBodyRef}>
            {
                historyMessages.map((message, index) => {
                    return (
                        <div key={message.id + index} className={cls.MessageId}>
                            {
                                index === 14 &&
                                <div ref={lastMessageRef} style={{fontSize: 1, lineHeight: 1, height: 1}}>&nbsp;</div>
                            }
                            <MessageItem message={message} index={index} />
                        </div>
                    )
                })
            }

            {!socketConnected && <PreloaderConnection/>}
            <div className={cls.messagesEndRef} ref={messagesEndRef}></div>
        </div>
    );
};

export default ChatBody;
