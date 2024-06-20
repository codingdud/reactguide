import { forwardRef,useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const ResultModel=forwardRef(function ResultModel({onReset,remaningTime,targetTime},ref ){
    const userLost=remaningTime<=0
    const formatedTime=(remaningTime/1000).toFixed(2)
    const score=Math.round((1-remaningTime/(targetTime*1000))*100) 
    const dialog=useRef()
    useImperativeHandle(ref,()=>{
        return {open(){
            dialog.current.showModal();
        }}
    })
    return createPortal(<dialog ref={dialog} className="result-modal">
        {userLost&&<h2>You lost</h2>}
        {!userLost&&<h2>You Score:{score}</h2>}
        <p>
            the target time was <strong>{targetTime} secounds.</strong>
        </p>
        <p>you stop timer within <strong>{formatedTime} secounds was left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById("modal")
    )
})

export default ResultModel