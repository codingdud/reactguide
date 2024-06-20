import React, { useState } from 'react'
import { Output } from './Output'

export default function Greeting() {
  const[click,setClick]=useState('click')
  function  handleClick(){
    setClick("I am Clicked")
  }
  return (
    <div>
        <h2>hello world</h2>
        <p> it good to see you</p>
        {click==='click'?<Output>click this button to change me</Output>:<Output>changed</Output>}
        <button onClick={handleClick}>click</button>
    </div>
  )
}
