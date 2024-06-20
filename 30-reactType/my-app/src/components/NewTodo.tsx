import { useRef,useContext } from "react";
import classes from './NewTodo.module.css'
import { Contex } from "../store/todo-contex";
export const NewTodo:React.FC= () => {
  const todoCtx=useContext(Contex)
  const todotext=useRef<HTMLInputElement>(null)
  const hadleSubmit=(event:React.FormEvent)=>{
    event.preventDefault();
    const enterValue=todotext.current!.value;
    if(enterValue.trim().length===0){
      return
    }
    todoCtx.addTodo(enterValue)
    console.log(enterValue);
  }
  return (
    <form className={classes.form} onSubmit={hadleSubmit}>
        <label htmlFor="text">Todo Text</label>
        <input id="text" type="text" ref={todotext}/>
        <button>add Todo</button>
    </form>
  )
}
