// import React from 'react'

export const metadata={
  title:"artical page"
}

export default function ({children}) {
  return (
    <div style={{background:"green"}}>
        <h1>layoutLayer</h1>
        <dev >

        {children}
        </dev>
    </div>
  )
}
