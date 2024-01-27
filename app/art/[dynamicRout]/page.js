import React from 'react'

export default function dynamicpage(props) {
    console.log(props)
  return (
    <div style={{background:"red"}}>
    <div>dynamicpage</div>
    <div>{props.params.dynamicRout}</div>
    </div>
  )
}
