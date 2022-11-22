import React from 'react'
import './global.css';
import {Post} from '../src/components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import  './App.modules.css';


 const posts = [
{
id: 1,
author:{
  avatarUrl:'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50',
  name: 'Lucas Aparecido',
  role: 'Web Developer'
},

content: [
  {type: 'paragraph', content: "Teste 123"},
  {type: 'paragraph', content: "Teste 321"},
  {type: 'link', content: 'google.com.br'},
],
publishedAt: new Date('2022-05-03 20:00:00'),
},

{
  id: 2,
  author:{
    avatarUrl:'https://www.w3schools.com/howto/img_avatar.png',
    name: 'Daniel',
    role: 'Web Developer'
  },
  
  content: [
    {type: 'paragraph', content: "Teste 123"},
    {type: 'paragraph', content: "Teste 321"},
    {type: 'link', content: 'google.com.br'},
  ],
  publishedAt: new Date('2022-05-10 20:00:00'),
  },
  


 ];

 


export function App() {
  return (
<div> 
      <Header />
    

      <div className="wrapper">
        
      <Sidebar/>
        <main>
        {posts.map(post =>{
          return (<Post />)
        })}
        </main>
      </div>



    </div>
  );
}
