import React, {useState} from 'react';
import cls from "./MessageForm.module.css";
import {Field, Form} from "react-final-form";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


interface PropsType {
    onSubmit: (values: any) => void
    enterPress: (event: any) => void
}
const MessageForm: React.FC<PropsType> = ({enterPress, onSubmit}) => {

    const messageSent = (event: any) => {
        if (event.keyCode === 13 && event.target.value) {
            onSubmit(event.target.value)
        }
    }

    return (
        <Form
            onSubmit={onSubmit}
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
                                            onKeyUp={messageSent}
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
