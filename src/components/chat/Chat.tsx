import React, {useState} from 'react';
import {Socket} from "socket.io-client";
import cls from './Chat.module.css'

import ChatBody from "../../common/ChatBody/ChatBody";
import MessageForm from "../../common/MessageForm/MessageForm";
import ControlPanel from "../../common/ControlPanel/ControlPanel";
import MenuLanguage from "../../common/MenuLanguage/MenuLanguage";

import {createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {TabContext, TabPanel} from '@mui/lab';
import {green} from '@mui/material/colors';

import 'antd/dist/antd.css';









interface PropsType {
    socket: Socket
}

const Chat: React.FC<PropsType> = ({socket}) => {
    const [tab, setTab] = useState<string>('1');
    const [newMessage, setNewMessage] = useState<string>('');
    const [tempNewMessageText, setTempNewMessageText] = useState<string>('');
    const [hideChat, setHideChat] = useState<boolean>(false)





    const changeTab = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };

    const hideChatToggle = () => {
        setHideChat(!hideChat)
    }

    const innerTheme = createTheme({
        palette: {
            primary: {
                main: green[500],
            },
        },
    });

    //Writing new message
    const changeMessage = (value: string) => {
        setTempNewMessageText(value)
    };

    const insertEmoji = () => {
        setTempNewMessageText(tempNewMessageText + ' :)')
    }
    const onSubmit = () => {
        setNewMessage(tempNewMessageText)
        setTempNewMessageText('')
    };




    return (
        <div className={cls.chat}>
            <TabContext value={tab}>
                <div className={cls.chatHeader}>
                    <div className={cls.headerMenu}>
                        <Box sx={{maxWidth: 270}}>
                            <ThemeProvider theme={innerTheme}>
                                <Tabs
                                    value={tab}
                                    onChange={changeTab}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    sx={{color: "#ffffff", padding: 0, margin: 0}}
                                >
                                    <Tab label="Общий" value="1" sx={{color: "#ffffff"}}/>
                                    <Tab label="Клан" value="2" sx={{color: '#ffffff'}}/>
                                    <Tab label="Друзья" value="3" sx={{color: '#ffffff'}}/>
                                    <Tab label="Новости" value="4" sx={{color: '#ffffff'}}/>
                                </Tabs>
                            </ThemeProvider>
                        </Box>
                    </div>
                    <MenuLanguage />
                    <ControlPanel hideChatToggle={hideChatToggle} />
                </div>
                {
                    !hideChat &&
                    <>
                        <div className={cls.chatBody}>
                            <TabPanel value="1" sx={{padding: 0}}>
                                <div className={cls.chatContainer}>
                                    <ChatBody newMessage={newMessage} socket={socket}/>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className={cls.chatContainer}>
                                    Клан
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className={cls.chatContainer}>
                                    Друзья
                                </div>
                            </TabPanel>
                            <TabPanel value="4">
                                <div className={cls.chatContainer}>
                                    Новости
                                </div>
                            </TabPanel>
                        </div>
                        <div className={cls.chatFooter}>
                            <MessageForm onSubmit={onSubmit} changeMessage={changeMessage} insertEmoji={insertEmoji} tempNewMessageText={tempNewMessageText} />
                        </div>
                    </>
                }

            </TabContext>
        </div>
    );
};

export default Chat;
