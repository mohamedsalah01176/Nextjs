import React from 'react'

export default async function Postdetails({id}) {
    
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    },2000)
  })


    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{
            revalidate:120
        }
    })
    const data=await res.json()
    console.log(id)
  return (
    <div style={{width:"80%",background:"blue",textAlign:"center",margin:"auto"}}>
        <h1>{data.title}</h1>
        <h1>{data.body}</h1>

      </div>
  )
}
