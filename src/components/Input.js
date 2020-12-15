import React from 'react';
import { InsertInput } from '../styles/insertInput';

const Input = props => {
    const checkNumber = e => {
        const charCode = (e.which) ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            e.preventDefault(); 
    }
    return(
        <>
            <InsertInput id="number" onKeyPress={checkNumber} onChange={props.change}/>
        </>
    )
}

export default Input;