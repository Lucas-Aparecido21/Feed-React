import React from 'react'
import './Post.modules.css'
export function Post()
{
    return (
    <article className="post">
        <header>
            <div className="author">
                <img className="avatar" src="https://cdn3.vectorstock.com/i/1000x1000/08/37/profile-icon-male-user-person-avatar-symbol-vector-20910837.jpg" />
                <div className="authorInfo">
                <strong>Lucas Aparecido</strong>    
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
    </article>
    );
}