import React, {useEffect, useRef, useState} from 'react';
import cls from "./ChatBody.module.css";
import MessageText from "../MessageText/MessageText";
import MessageHeader from "../MessageHeader/MessageHeader";
import avatar1 from "../../assets/img/avatar1.png";


import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {Socket} from "socket.io-client";
import {Message} from "../../types/historyMessages";
import Time from "../Time/Time";
import PreloaderConnection from "../PreloaderConnection/PreloaderConnection";
import MessageItem from "../MessageItem/MessageItem";


interface PropsType {
    newMessage: string
    socket: Socket
}

const ChatBody: React.FC<PropsType> = ({newMessage, socket}) => {
    const {historyMessages, limit, skip, error} = useTypedSelector(state => state.historyMessages)
    const chatBodyRef = React.useRef<HTMLDivElement>(null);
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


    // If sent new message from form
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
            chatBodyRef.current!.scrollTop = chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight
        }
        if (viewHistory) {
            console.log('Устанавливаем позицию===============', lastPosition)
            chatBodyRef.current!.scrollTop = lastPosition
        }
        console.log('=====================Загрузка=====================')
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
        // console.log(e.target.scrollTop, '=====', chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight)
        // console.log('scrollHeight = ', chatBodyRef.current!.scrollHeight)
        // console.log('clientHeight = ', chatBodyRef.current!.clientHeight)


        if (e.target.scrollTop < (chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight) && e.target.scrollTop > (chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight - 10)) {
            setLastPosition(e.target.scrollTop)
            console.log('Запоминаем позицию========', e.target.scrollTop)
        }


        if (e.target.scrollTop < chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight) {
            console.log('Просмотр архива!')
            setViewHistory(true)
        } else if (e.target.scrollTop === chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight) {
            console.log('Последние сообщения!')
            setViewHistory(false)
        }
    }




    if (error) return <div><h1>{error}</h1></div>

    return (
        <div className={cls.chatBody} ref={chatBodyRef}>
            {
                historyMessages.map((message, index) => {
                    return (
                        <div key={message.id + index}>
                            <MessageItem message={message} />
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
