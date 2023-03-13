/*import React, { useState, useEffect } from "react"

export default function EditTodos(props){
    const todoId = props.todoId;
    const [task, setTask] = useState('')
    const[complete, setComplete] = useState(false)

    //when the edit component loads, i need to show some data.
    useEffect(() =>{
        async function getSingleTodo(){
            try{
                const response = await fetch(`https://dummyjson.com/todos/${todoId}`)
                const todo = await response.json()
                setTask(todo.todo)
                setComplete(todo.complete)
            }catch(err){
                console.error(err)
            }
        }
        getSingleTodo()
    })


    async function updateTodo(){
        try{
                const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
                    method: 'PUT', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        completed: complete,
                    })
                 })

                 const body = await response.json()
                 console.log(body)
                 props.done()
                 
        }catch(err){
            console.error(err)
        }
    }
   
        return(
        <>
                 <label>
                     Task:
                 <input type="text" 
                 value={task} 
                 onChange={e=>setTask(e.target.value)}
                 />
                 </label>

                 <label>
                     Complete:
                     <select value={complete} 
                     onChange={e=>setComplete(e.target.value)}
                     >
                         <option value="true">True</option>
                         <option value="false">False</option>

                     </select>
                     
                 </label>
     
                 <button onClick={  ()=>{ updateTodo() } }>Update Todo</button>
                 </>)
}*/

import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


export default function EditTodo(props){
    const { todoId } = useParams()
    const [task, setTask] = useState('')
    const [complete, setComplete] = useState(false)



    useEffect(()=>{
        async function getSingleTodo(){
            try{
                const response = await fetch(`https://dummyjson.com/todos/${todoId}`)
                const todo = await response.json()
                setTask(todo.todo)
                setComplete(todo.complete)
            }catch(err){
                console.error(err)
            }
        }
        
        getSingleTodo()
    },[])

    async function updateTodo(){
        try{
                const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
                    method: 'PUT', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        completed: complete,
                    })
                 })

                 const body = await response.json()
                 console.log(body)
                 props.done()

        }catch(err){
            console.error(err)
        }
    }

    return <>
            <label>
                Task:
                <input
                type="text"
                value={task}
                onChange= {e => setTask(e.target.value)}
                />
            </label>

            <label>
                Complete:
                <select 
                onChange= {e => setComplete(e.target.value)}
                value={complete}
                >
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </label>
            <button onClick={  ()=>{ updateTodo() } }>Update Todo</button>
        </>
}
    