import React, {useState} from 'react';
import cls from "./MessageForm.module.css";
import {Field, Form} from "react-final-form";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

interface PropsType {
    onSubmit: (values: any) => void
    newMessage: string
}
const MessageForm: React.FC<PropsType> = ({onSubmit, newMessage}) => {


    const messageSent = (event: any) => {
        if (event.keyCode === 13 && event.target.value) {
            onSubmit(event.target.value)
        }
    }


    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ message: newMessage }}
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
                                        />
                                    </div>
                                )}
                            </Field>

                        </div>
                        <div className={cls.formButton}>
                            <SentimentSatisfiedAltIcon  sx={{ color: "#ffffff", opacity: "0.3", cursor: "pointer" }} />
                        </div>
                    </div>
                </form>
            )}
        />
    );
};

export default MessageForm;
