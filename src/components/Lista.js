import React from 'react';
import { ListaElement } from '../styles/lista';

const Lista = props => {
    let print = false;
    return(
        <>
            <ListaElement>
                {props.zetas.map(element => {
                    if(print)
                        return (
                            <li>
                            <span>{ element.number }</span> 
                            <h2>{ element.zeta }</h2>
                                <span>
                                    {element.nums.map(value => (
                                        value + ' '
                                    ))}
                                </span>
                            </li>
                        )
                    print = true;
                    return null;
                })}
            </ListaElement>
        </>
    )
}

export default Lista;