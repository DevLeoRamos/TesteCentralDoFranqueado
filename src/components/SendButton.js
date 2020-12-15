import React from 'react';
import { NumberButton } from '../styles/numberButton';

const SendButton = props => {
    return(
        <>
            <NumberButton className={props.state ? 'visible' : 'hidden'} onClick={props.run}>Calcular</NumberButton>
        </>
    )
}

export default SendButton;