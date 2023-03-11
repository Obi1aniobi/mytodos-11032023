import React, {useState, useEffect} from 'react';

export default function AddTodos(){
    const [todo, setTodo] = useState ('')
    const [isCompleted, setIsCompleted] = useState (false)


    /*function createTodo(){

        fetch('https://dummyjson.com/todos/add', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                  todo: 'Use DummyJSON in the project',
                  completed: false,
                  userId: 5,
               })
               })
               .then(res => res.json())
               .then(console.log);

    }*/

    async function createTodo(){
        try {
            const response = await fetch('https://dummyjson.com/todos/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                   todo: todo,
                   completed: isCompleted,
                   userId: 5,
                })
                })
                const body = await response.json()
                console.log(body)
        }catch(error){
            console.error(error);
        }
    }

    return(
       <>
            <label>
                Please enter your Task
            <input type="text" value={todo} onChange={e=>setTodo(e.target.value)}/>
            </label>
            <label>
                Completed
                <select value={isCompleted} onChange={e=>setIsCompleted(e.target.value)}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                
            </label>

            <button onClick={createTodo}>Submit</button>

        

            </>
       
    )





}







