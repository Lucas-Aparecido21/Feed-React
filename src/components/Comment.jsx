import React from "react";
import './Comment.modules.css';
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'

export function Comment()
{
    return(
        <div className="comment">
        <img src="https://cdn3.vectorstock.com/i/1000x1000/08/37/profile-icon-male-user-person-avatar-symbol-vector-20910837.jpg" alt=" "/>
        <div className="commentBox">
        <div className="commentContent">
        <header>
            <div className="authorAndTime">
                <strong>Diego</strong>
                <time title ="11 de maio de 2022" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás </time>
            </div>
            <button title="Deletar comentário">
                <Trash size={24}/>
            </button>
        </header> 
           <p>Muito bom, parabéns!!</p>
        </div>   
        
        <footer> 
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
        </div>

        </div>

    )
}