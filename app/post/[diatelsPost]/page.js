import Postdetails from '@/app/art/component/postdetails'
import React, { Suspense } from 'react'

export default async function daitelpost(props) {

  // await new Promise((resolve)=>{
  //   setTimeout(()=>{
  //     resolve()
  //   },3000)
  // })


  //   const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.diatelsPost}`,{
  //       next:{
  //           revalidate:120
  //       }
  //   })
  //   const data=await res.json()

    console.log(props)
  return (
  <>
    <h2>Post details</h2>


    <Suspense fallback={<div>loading..</div>}>
      <Postdetails id={props.params.diatelsPost}/>
    </Suspense>
  </>
  )
}
