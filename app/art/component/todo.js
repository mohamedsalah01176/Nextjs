'use client'

import { useEffect, useState } from "react";

export default function Todo() {

    //client component


    const [todo,setTodo]=useState({})

   useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setTodo(data))

   },[])

  return (
    <div>
        <h1>{todo.title}</h1>
    </div>
  )
}
