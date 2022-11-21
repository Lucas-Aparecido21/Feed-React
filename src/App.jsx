import React from 'react'
import './global.css';
import {Post} from '../src/components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import  './App.modules.css';


export function App() {
  return (
<div> 
      <Header />
    

      <div className="wrapper">
        
      <Sidebar/>
        <main>
      <Post 
      author="teste"
      content="teste teste teste teste"
      />
      <Post 
      author="teste2"
      content="teste2 teste2 teste2 teste2"
    />
    </main>
      </div>



    </div>
  );
}
