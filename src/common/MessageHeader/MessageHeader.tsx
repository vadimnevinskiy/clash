import React from 'react';
import cls from "./MessageHeader.module.css";
import admin_badge from "../../assets/img/admin_badge.png";
import moderator_badge from "../../assets/img/moderator_badge.png";

interface PropsType {
    avatar: string
    avatarColor: string
    userName: string
    userRating: number
}

const MessageHeader: React.FC<PropsType> = ({avatar, avatarColor, userName, userRating}) => {
    return (
        <div className={cls.messageHeader}>
            <div className={cls.avatar} style={{background: avatarColor}}>
                <img src={avatar} alt=""/>
            </div>
            <div className={cls.userName}>
                {userName}
            </div>
            {

                <div className={cls.badge}>
                    <img src={(userRating < 10 && userRating > 8) ? admin_badge : (userRating <= 8 && userRating > 5) ? moderator_badge : ''} alt=""/>
                </div>
            }
            {
                userRating &&
                <div className={cls.userRating}>
                    {userRating}
                </div>
            }
        </div>
    );
};

export default MessageHeader;
