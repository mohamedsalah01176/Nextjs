import React from 'react'
import Todo from '../component/todo'

export default async function storypage() {

  //servise component
  const res=await fetch('https://jsonplaceholder.typicode.com/todos/1',{
    // SSG
    // cache:"force-cache"

    // SSR
    // cache:"no-store"

    //ISG
    // next:{
    //   revalidate:60
    // }
  })
  const todo= await res.json()



  return (
    <div style={{background:"blue"}}>
        <h1>story</h1>
        <h1>name from api server component: {todo.title}</h1>
        <h1>name from api client Component: </h1>
        <Todo/>

    </div>
  )
}
