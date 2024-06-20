import { useRef } from "react"
import Model from "./model"
export default function Show() {
  const dailog=useRef()
  function display(){
    dailog.current.open()
  }
  function hide(){
    dailog.current.close()
  }
  return (
    <div>
        <button onClick={display}>Click</button>
        <Model text="hi" ref={dailog}/>
        {/* <dialog ref={dailog}>
            I am Dialog
        </dialog> */}
        <button onClick={hide}>Hide</button>
    </div>
  )
}
