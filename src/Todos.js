/*import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import EditTodo from './EditTodo'


export default function Todos(){

    const [todos, setTodos] = useState ([])
  const [isPageInError, setIsPageInError] = useState(false)
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false)
  const [todoIdInEdit, setTodoIdInEdit] = useState('')

  useEffect(() => {

    async function getTodos() {
      try {
        const response = await fetch('https://dummyjson.com/todos')
        const todos = await response.json()
        setTodos(todos)
      } catch(error){
        setIsPageInError(true)
      }
    }
    getTodos()
  }, [])


  async function deleteTodo(todoId){
    try{
      const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: 'DELETE',
      })
      const body = await response.json()
      console.log(body)
    }catch(err){
      console.error(err)
    }
  }
  
  
  return (
  <>
  {!isEditButtonPressed && <Table striped bordered hover>
    

      <thead>
        <tr>
          <th>Todos</th>
          
        </tr>
      </thead>

      <tbody>

      {todos.todos && todos.todos.map((item,index)=>{
        return(
          
        <tr key={index}><td>{item.todo}</td>
        <td>
          <button onClick={()=>{setIsEditButtonPressed(true)
        setTodoIdInEdit(item.id)}}>Edit</button>
        </td>
        <td>
          <button onClick={()=> deleteTodo(item.id)}>Delete</button>
          </td>
        </tr>)
        
      })}

      </tbody>
      </Table>
      }{
          isEditButtonPressed && <EditTodo todoId={todoIdInEdit} done={()=>setIsEditButtonPressed()}/>
        }
      </>
    
  );
}*/

import React, {useState, useEffect} from "react"
import Table from 'react-bootstrap/Table';

export default function Todos(){
    const [todos, setTodos] = useState([])
    const [isPageInError, setIsPageInError] = useState(false)
  

    useEffect(()=>{
        async function getTodos(){
          try{
            const response = await fetch('https://dummyjson.com/todos')
            const todos = await response.json()
            setTodos(todos)
          }catch(error){
            setIsPageInError(true)
          }
        }
        getTodos()
      },[])

      async function deleteTodo(todoId){
        try{
          const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
            method: 'DELETE',
          })
          const body = await response.json()
          console.log(body)
        }catch(err){
          console.error(err)
        }
      }

      return (
       <Table striped bordered hover>
           <thead>
             <tr>
               <th>Todos</th>
             </tr>
           </thead>
           <tbody>
           {todos.todos  && todos.todos.map((item,index)=>{
                return (<tr key={index}>
                  <td>{item.todo}</td>
                  <td>
                     <a href={`#/edit-todo/${item.id}`}>Edit</a>
                  </td>
                  <td>
                    <button onClick={()=> deleteTodo(item.id)}>Delete</button>
                    </td>
                </tr>)
          })}
          </tbody>
         </Table>
       );

}

//SRP
