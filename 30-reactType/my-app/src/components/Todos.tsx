import React, { useContext } from "react"
import { Item } from "./Item"
import { Contex } from "../store/todo-contex"
import classes from './Todos.module.css'

const  Todos:React.FC=()=> {
  const todoCtx=useContext(Contex)
  return (
    <ul className={classes.todos}>
        {todoCtx.items.map((item)=>
        (<Item key={item.id} text={item.text} onRemove={todoCtx.removeTodo.bind(null,item.id)} />)
        )}
    </ul>
  )
}

export default Todos
