import React from 'react';
import cls from "./ChatBody.module.css";
import MessageText from "../MessageText/MessageText";
import MessageHeader from "../MessageHeader/MessageHeader";
import avatar1 from "../../assets/img/avatar1.png";
import avatar2 from "../../assets/img/avatar2.png";
import moderator_badge from "../../assets/img/moderator_badge.png";
import admin_badge from "../../assets/img/admin_badge.png";


const ChatBody = () => {
    return (
        <>
            <div className={cls.message}>
                <div className={cls.messageBlock}>
                    <MessageText text={"теперь игра закончена)))"}/>
                </div>
                <div className={cls.messageTime}>
                    14:28
                </div>
            </div>
            <div className={cls.message}>
                <div className={cls.messageBlock}>
                    <MessageHeader avatar={avatar1} avatarColor={'#DD8A26'} userName={'BivOld'}
                                   userRating={5}/>
                    <MessageText
                        text={"Я думал, что они будут пополняться раз в н-ное время. А тут реально игра закончена"}/>
                </div>
                <div className={cls.messageTime}>
                    14:28
                </div>
            </div>
            <div className={cls.message}>
                <div className={cls.messageBlock}>
                    <MessageHeader avatar={avatar2} avatarColor={'#4D69E9'} badge={moderator_badge}
                                   userName={'Nigativ'} userRating={3}/>
                    <MessageText text={"wac можно только купить"}/>
                </div>
                <div className={cls.messageTime}>
                    14:31
                </div>
            </div>
            <div className={cls.message}>
                <div className={cls.messageBlock}>
                    <MessageHeader avatar={avatar1} avatarColor={'#DD8A26'} badge={admin_badge}
                                   userName={'Skylifesky'} userRating={10}/>
                    <MessageText text={"Цена 1 wac = 0,1$ и цена не изменится"}/>
                </div>
                <div className={cls.messageTime}>
                    14:31
                </div>
            </div>
            <div className={cls.message + ' ' + cls.myMessage}>
                <div className={cls.messageTime}>
                    10:21
                </div>
                <div className={cls.messageBlock}>
                    <MessageText text={"Сегодня идем на германию"}/>
                </div>
            </div>
        </>
    );
};

export default ChatBody;
