import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

export default function Todos(){

    const [todos, setTodos] = useState ([])
  const [isPageInError, setIsPageInError] = useState(false)

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
  
  return (
  
    <Table striped bordered hover>

      <thead>
        <tr>
          <th>Todos</th>
          
        </tr>
      </thead>

      <tbody>

      {todos.todos && todos.todos.map((item,index)=>{
        return(<tr key={index}><td>{item.todo}</td></tr>)
      })}

      </tbody>

      </Table>
    
  );
}
