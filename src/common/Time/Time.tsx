import React from 'react';
import cls from "./Time.module.css";


interface PropsType {
    createdAt: string
}
const Time: React.FC<PropsType> = ({createdAt}) => {

    const getDateTime = (createdAt: string) => {
        const d = new Date(createdAt);
        const minutes = d.getUTCMinutes().toString()
        if (minutes.length < 2) {
            return d.getUTCHours() + ':' + '0' + minutes
        }
        return d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getSeconds()
    }


    return (
        <>
            <div className={cls.messageTime}>
                {
                    createdAt &&
                    getDateTime(createdAt)
                }
            </div>
        </>
    );
};

export default Time;
