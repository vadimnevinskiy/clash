import React from 'react';
import cls from './MessageText.module.css'

interface PropsType {
    text: string
}

const MessageText: React.FC<PropsType> = ({text}) => {
    return (
        <>
            {text}
        </>
    );
};

export default MessageText;
