import React from 'react'
import styles from './Header.modules.css'
import igniteLogo from '../imagens/ignite-logo.svg'

export function Header ()
{
    return (

     <header className="header">   
    <img src={igniteLogo} alt ="Logo-ignite"/>
    </header>
    );
}