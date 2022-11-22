import React from "react";
import './Comment.modules.css';
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import { Avatar } from "./Avatar";

export function Comment(props)
{
    return(
        <div className="comment">
        <Avatar src="https://www.w3schools.com/howto/img_avatar2.png" alt=" "/>
        <div className="commentBox">
        <div className="commentContent">
        <header>
            <div className="authorAndTime">
                <strong>Fernanda</strong>
                <time title ="11 de maio de 2022" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás </time>
            </div>
            <button title="Deletar comentário">
                <Trash size={24}/>
            </button>
        </header> 
           <p>{props.content}</p>
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