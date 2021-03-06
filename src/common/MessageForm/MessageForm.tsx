import React, {useRef} from 'react';
import cls from "./MessageForm.module.css";
import {Field, Form} from "react-final-form";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';



interface PropsType {
    onSubmit: (values: any) => void
    changeMessage: (values: any) => void
    insertEmoji: () => void
    tempNewMessageText: string
}
const MessageForm: React.FC<PropsType> = ({onSubmit, changeMessage, insertEmoji, tempNewMessageText}) => {
    const messageFieldRef = useRef<HTMLInputElement>(null);

    const clickOnEmoji = () => {
        insertEmoji()
        messageFieldRef.current?.focus()
    }

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ message: tempNewMessageText }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div className={cls.chatForm}>
                        <div className={cls.textField}>
                            <Field name="message">
                                {props => (
                                    <div>
                                        <input
                                            ref={messageFieldRef}
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
                                onClick={clickOnEmoji}
                            />
                        </div>
                    </div>
                </form>
            )}
        />
    );
};

export default MessageForm;
