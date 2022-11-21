import React from 'react'
import './Post.modules.css'
import {Comment} from './Comment';
import { Avatar } from './Avatar';
export function Post()
{
    return (
    <article className="post">
        <header>
            <div className="author">
                <Avatar src="https://www.w3schools.com/w3images/avatar2.png" />
                <div className="authorInfo">
                <strong>Diego</strong>    
                <span>Web Developer</span>
                </div>
                </div>
            

            <time title ="11 de maio de 2022" dateTime="2022-05-11 08:13:00">Publicado há 1h </time>

        </header>
        <div className="content">
            <p>  Teste 1  </p>
            <p>  Teste 2  </p>
            <p>  Teste 3  </p>
            <p>  <a href=""> #teste</a>  </p>
        </div>

        <form className="commentForm">
            <strong>Deixe seu feedback</strong>

            <textarea placeholder="Deixe um comentário"/>
            <footer>
            <button type="submit">Publicar</button>
            </footer>

            </form>
            <div className="commentList">
                <Comment/>
               
            </div>
    </article>
    );
}