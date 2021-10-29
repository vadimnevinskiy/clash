import React, {useEffect, useRef, useState} from 'react';
import cls from "./ChatBody.module.css";
import MessageText from "../MessageText/MessageText";
import MessageHeader from "../MessageHeader/MessageHeader";
import avatar1 from "../../assets/img/avatar1.png";


import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {io} from "socket.io-client";
import {Message} from "../../types/historyMessages";
import Time from "../Time/Time";
import PreloaderConnection from "../PreloaderConnection/PreloaderConnection";
import set = Reflect.set;

let socket = io(`wss://test-chat-backend-hwads.ondigitalocean.app`, {transports: ["websocket"]});


interface PropsType {
    text: string
}

const ChatBody: React.FC<PropsType> = ({text}) => {
    const {historyMessages, limit, skip, error} = useTypedSelector(state => state.historyMessages)
    const {fetchHistoryMessages, setMessage} = useActions()
    const chatBodyRef = React.useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [viewHistory, setViewHistory] = useState<boolean>(false)
    const [socketConnected, setSocketConnected] = useState<true | false>(true)

    const [lastPosiiotn, setLastPosition] = useState<number>(0)

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
        if(!viewHistory){
            chatBodyRef.current!.scrollTop = chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight
        }
        if(viewHistory) {
            console.log('Устанавливаем позицию===============', lastPosiiotn)
            chatBodyRef.current!.scrollTop = lastPosiiotn
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


        if(e.target.scrollTop < (chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight) && e.target.scrollTop > (chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight - 10)) {
            setLastPosition(e.target.scrollTop)
            console.log('Запоминаем позицию========', e.target.scrollTop)
        }
        if(e.target.scrollTop < chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight) {
            console.log('Просмотр архива!')
            setViewHistory(true)
        } else if (e.target.scrollTop === chatBodyRef.current!.scrollHeight - chatBodyRef.current!.clientHeight) {
            console.log('Последние сообщения!')
            setViewHistory(false)
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
                                        {/*index={index + 1}<br/>*/}
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

            {!socketConnected && <PreloaderConnection />}
            <div className={cls.messagesEndRef} ref={messagesEndRef}></div>
        </div>
    );
};

export default ChatBody;
