import React from 'react';
import cls from "./MessageForm.module.css";
import {Field, Form} from "react-final-form";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface PropsType {
    onSubmit: (values: any) => void
    enterPress: (event: any) => void
}
const MessageForm: React.FC<PropsType> = ({enterPress, onSubmit}) => {

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine, values}) => (
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
                                            onKeyUp={enterPress}
                                            autoComplete={'off'}
                                        />
                                    </div>
                                )}
                            </Field>

                        </div>
                        <div className={cls.formButton}>
                            <SentimentSatisfiedAltIcon  sx={{ color: "#ffffff", opacity: "0.3", cursor: "pointer" }} />
                            {/*<button type="submit" disabled={submitting || pristine}>*/}
                            {/*    Submit*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </form>
            )}
        />
    );
};

export default MessageForm;
