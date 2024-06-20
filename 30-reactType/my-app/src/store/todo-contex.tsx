import { createContext, useState } from "react";
import Todo from "../model/todo";

type TodoObj={
    items:Todo[];
    addTodo:(text:string)=>void;
    removeTodo:(id:string)=>void
}

export const Contex=createContext<TodoObj>({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:string)=>{}
})

const TcontexProvider:React.FC<{children:React.JSX.Element}>=(props)=>{
    const [todos,setTodos]=useState<Todo[]>([])
  
  const onAddTodoHandler=(text:string)=>{
    setTodos(prev=>[...prev,new Todo(text)])
  }
  const onRemoveTodoHandler=(id:string)=>{
    setTodos((prev)=>{
      return  prev.filter((item:Todo)=>item.id!==id)
    })
  }
  const contextValue:TodoObj={
    items:todos,
    addTodo:onAddTodoHandler,
    removeTodo:onRemoveTodoHandler
  }
    return (
        <Contex.Provider value={contextValue}>
            {props.children}
        </Contex.Provider>
    )
}

export default TcontexProvider