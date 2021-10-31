import React, {useState} from 'react';
import cls from "./MessageForm.module.css";
import {Field, Form} from "react-final-form";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

interface PropsType {
    onSubmit: (values: any) => void
    changeMessage: (values: any) => void
    insertEmoji: () => void
    tempNewMessage: string
}
const MessageForm: React.FC<PropsType> = ({onSubmit, changeMessage, insertEmoji, tempNewMessage}) => {


    const messageSent = (event: any) => {
        if (event.keyCode === 13 && event.target.value) {
            onSubmit(event.target.value)
        }
    }


    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ message: tempNewMessage }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div className={cls.chatForm}>
                        <div className={cls.textField}>
                            <Field name="message">
                                {props => (
                                    <div>
                                        <input
                                            {...props.input}
                                            type="text"
                                            placeholder="Напишите сообщение"
                                            autoComplete={'off'}
                                            onChange={(e) => changeMessage(e.target.value)}
                                        />
                                    </div>
                                )}
                            </Field>

                        </div>
                        <div className={cls.formButton}>
                            <SentimentSatisfiedAltIcon
                                sx={{ color: "#ffffff", opacity: "0.3", cursor: "pointer" }}
                                onClick={insertEmoji}
                            />
                        </div>
                    </div>
                </form>
            )}
        />
    );
};

export default MessageForm;
