import React from 'react';
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

import {Form, Field} from "react-final-form";

const useStyles = makeStyles({
    arrowStyle: {
        color: "#cccccc"
    },
    inactiveStyle: {
        color: "red"
    },
    activeStyle: {
        color: "yellow"
    }
})

const Chat = () => {
    const classes = useStyles();
    const [lang, setLanguage] = React.useState('ru');
    const [tab, setTab] = React.useState('1');

    const changeLang = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };
    const changeTab = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };


    const innerTheme = createTheme({
        palette: {
            primary: {
                main: green[500],
            },
        },
    });


    const onSubmit = async (values: any) => {
        window.alert(JSON.stringify(values));
    };

    return (
        <div className={cls.chat}>
            <TabContext value={tab}>
                <div className={cls.chatHeader}>
                    <div className={cls.headerMenu}>
                        <Box sx={{maxWidth: 300}}>
                            <ThemeProvider theme={innerTheme}>
                                <Tabs
                                    value={tab}
                                    onChange={changeTab}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    className={classes.arrowStyle}
                                >
                                    <Tab label="Общий" value="1" sx={{color: '#ffffff'}}/>
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
                        <span className={cls.expandMenu}></span>
                        <span className={cls.minimizeMenu}></span>
                    </div>
                </div>
                <div className={cls.chatBody}>
                    <TabPanel value="1">
                        <ChatBody/>
                    </TabPanel>
                    <TabPanel value="2"><ChatBody/></TabPanel>
                    <TabPanel value="3"><ChatBody/></TabPanel>
                    <TabPanel value="4"><ChatBody/></TabPanel>
                </div>
                <div className={cls.chatFooter}>
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit, form, submitting, pristine, values}) => (
                            <form onSubmit={handleSubmit}>
                                <div className={cls.chatForm}>
                                    <div className={cls.textField}>
                                        <Field
                                            name="message"
                                            component="input"
                                            type="text"
                                            placeholder="Напишите сообщение"
                                        />
                                    </div>
                                    <div className={cls.formButton}>
                                        <button type="submit" disabled={submitting || pristine}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    />
                </div>


            </TabContext>
        </div>
    );
};

export default Chat;
