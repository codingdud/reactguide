import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Model=forwardRef(({text},ref)=> {
    const dialog=useRef()
    useImperativeHandle(ref,()=>{
        return{open(){ 
            console.log("show")
            dialog.current.showModal()
        },
        close(){
            console.log("close");
            dialog.current.close()
        }
    }
    })
  return createPortal(
  <dialog ref= {dialog}>
    {text}
    <form method="dialog">
        <button>Close</button>
    </form>
  </dialog>,
  document.getElementById("model")
  )
})

export default Model;