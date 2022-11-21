import React from 'react';
import styles from './Avatar.modules.css';
export function Avatar(props)
{
    return(

    <img className= "avatar"src={props.src} />
    );


}