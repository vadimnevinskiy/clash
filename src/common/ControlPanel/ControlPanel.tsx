import React, {useState} from 'react';
import cls from "./ControlPanel.module.css";
import { ShrinkOutlined, MinusOutlined } from '@ant-design/icons';

interface PropsType {
    hideChatToggle: () => void
}

const ControlPanel: React.FC<PropsType> = ({hideChatToggle}) => {

    return (
        <div className={cls.controlPanel}>
            <span className={cls.expandMenu}>
                <ShrinkOutlined style={{fontSize: '14px', color: '#ffffff', lineHeight: '16px'}}/>
            </span>
            <span className={cls.minimizeMenu} onClick={hideChatToggle}>
                <MinusOutlined style={{fontSize: '14px', color: '#ffffff', lineHeight: '16px'}}/>
            </span>
        </div>
    );
};

export default ControlPanel;
