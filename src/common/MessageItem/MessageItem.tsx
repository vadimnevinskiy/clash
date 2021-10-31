import React from 'react';
import cls from "./MessageItem.module.css";
import MessageHeader from "../MessageHeader/MessageHeader";
import avatar1 from "../../assets/img/avatar1.png";
import MessageText from "../MessageText/MessageText";
import Time from "../Time/Time";
import {Message} from "../../types/historyMessages";


interface PropsType {
    message: Message

}
const MessageItem: React.FC<PropsType> = ({message}) => {

    const getRandomInt = () => {
        return (Math.floor(Math.random() * (1 - 10)) + 10);
    }

    return (
            <>
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
                        {/*{message.id}<br/><br/>*/}
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
        </>
    );
};

export default MessageItem;
