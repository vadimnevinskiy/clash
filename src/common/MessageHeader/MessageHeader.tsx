import React from 'react';
import cls from "./MessageHeader.module.css";


interface PropsType {
    avatar: string
    avatarColor: string
    badge?: string
    userName: string
    userRating: number
}

const MessageHeader: React.FC<PropsType> = ({avatar, avatarColor, badge, userName, userRating}) => {
    return (
        <div className={cls.messageHeader}>
            <div className={cls.avatar} style={{background: avatarColor}}>
                <img src={avatar} alt=""/>
            </div>
            <div className={cls.userName}>
                {userName}
            </div>
            {
                badge &&
                <div className={cls.badge}>
                    <img src={badge} alt=""/>
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
