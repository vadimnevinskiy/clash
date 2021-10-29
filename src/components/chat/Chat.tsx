import React, {useState} from 'react';
import cls from './Chat.module.css'
import ChatBody from "../../common/ChatBody/ChatBody";

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {TabContext, TabPanel} from '@mui/lab';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {green} from '@mui/material/colors';
import MessageForm from "../../common/MessageForm/MessageForm";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const useStyles = makeStyles({
    arrowStyle: {
        color: "#cccccc"
    },
})

const Chat = () => {
    const classes = useStyles();
    const [lang, setLanguage] = useState<string>('ru');
    const [tab, setTab] = useState<string>('1');
    const [text, setText] = useState<string>('');
    const [hideChat, setHideChat] = useState<boolean>(false)


    const changeLang = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };
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


    const onSubmit = (values: any) => {
        setText(values.message)
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
                                    className={classes.arrowStyle}
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
                    <div className={cls.menuLang}>
                        <FormControl fullWidth sx={{border: 'none'}} className={classes.arrowStyle}>
                            <Select
                                value={lang}
                                onChange={changeLang}
                                sx={{color: '#ffffff', borderRadius: 0, borderColor: '#ffffff'}}
                            >
                                <MenuItem value={'ru'}>Ru</MenuItem>
                                <MenuItem value={'en'}>En</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={cls.controlPanel}>
                        <span className={cls.expandMenu}>
                            <CloseFullscreenIcon sx={{color: '#ACACAC', fontSize: 13}}/>
                        </span>
                        <span className={cls.minimizeMenu} onClick={hideChatToggle}>
                            <HorizontalRuleIcon sx={{color: '#ACACAC', fontSize: 13}}/>
                        </span>
                    </div>
                </div>
                {
                    !hideChat &&
                    <>
                        <div className={cls.chatBody}>
                            <TabPanel value="1" sx={{padding: 0}}>
                                <div className={cls.chatContainer}>
                                    <ChatBody text={text}/>
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
                            <MessageForm enterPress={onSubmit} onSubmit={onSubmit}/>
                        </div>
                    </>
                }

            </TabContext>
        </div>
    );
};

export default Chat;
