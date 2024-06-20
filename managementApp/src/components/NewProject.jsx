import { useRef } from "react"
import Button from "./Button"
import Input from "./Input"
import ErrorModel from "./ErrorModel"
export default function NewProject({ onAdd,onCancel }) {
    const modal=useRef()
    const title = useRef()
    const des = useRef()
    const dueDate = useRef()
    function handleSave() {
        const enterTitle = title.current.value
        const enterDes = des.current.value
        const enterDueDate = dueDate.current.value

        if (enterTitle.trim() === '' ||
            enterDes.trim() === '' ||
            enterDueDate.trim() === '') {
                modal.current.open()
        }
        else{
            onAdd({
                title: enterTitle,
                description: enterDes,
                dueDate: enterDueDate
            })
        }
    }

    return (
         <>
         <ErrorModel ref={modal} caption="close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oop.. you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Make sure you provide valid input to input filed.</p>
         </ErrorModel>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4  my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <Button onClick={handleSave}>Save</Button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={des} label="Description" isText />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>)
}