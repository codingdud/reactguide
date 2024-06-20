import { useState } from "react"
export default function NewTask({onAddTask}) {
    const[enterTask,setEntertask]=useState('')
    function handleChange(event){
        setEntertask(event.target.value)
    }
    function handleClick(){
        if(enterTask.length===0){
            return
        }
        onAddTask(enterTask)
        setEntertask('')
    }
  return (
    <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange}/>
        <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add task</button>
    </div>
  )
}