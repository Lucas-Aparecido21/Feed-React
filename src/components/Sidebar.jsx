import React from 'react'
import './Sidebar.modules.css'
import  {PencilLine}  from 'phosphor-react'




export function Sidebar ()
{
    return (
    
    <aside className="sidebar">
     <img className="cover"src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50" ></img>
    <div className="profile">
        
    <img className="avatar" src="https://cdn3.vectorstock.com/i/1000x1000/08/37/profile-icon-male-user-person-avatar-symbol-vector-20910837.jpg" />
    <strong>Lucas Aparecido</strong>
    <span>Web Developer</span>

    <footer>
        
        <a href="#">
        <PencilLine size="20"/>
         Editar seu perfil 
         </a>
    </footer>
    
    </div>
    </aside>
    );
}