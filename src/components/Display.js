import React from 'react';
import { DisplayContent } from '../styles/display';

const Display = props => {
    if(props.zeta)
        return(
            <>
                <DisplayContent>
                    <h2>{props.zeta.zeta}</h2>
                    <span>
                        {props.zeta.nums.map(value => (
                            value + ' '
                        ))}
                    </span>
                </DisplayContent>
            </>
        );
        return(
            <>
            </>
        )
}

export default Display;