import React, {useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Table from 'react-bootstrap/Table';
import Todos from './Todos';

function App() {
  return(
    
    <Todos />
    
  )
  }
  

  //useEffect(() => {
    //fetch('https://dummyjson.com/todos')
   // .then(res => res.json())
   // .then(data=>setTodos(data));

 // }, [])




  

export default App;