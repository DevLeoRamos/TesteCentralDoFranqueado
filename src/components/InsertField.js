import React, { useState } from "react";
import Input from "./Input";
import SendButton from "./SendButton";
import { Field } from '../styles/field';

const InsertField = props => {
    const [buttonState, setButtonState] = useState(false);
    const buttonHandler = () => {
        if(document.getElementById('number').value.length > 0) setButtonState(true);
        else setButtonState(false);
    }
    window.onload = () => {
        document.getElementById('number').focus()
    }
    return(
        <Field>
            <Input change={buttonHandler} />
            <SendButton state={buttonState} run={props.getZeta} />
        </Field>
    )
}

export default InsertField;