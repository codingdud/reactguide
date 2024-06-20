import {useRef,useEffect} from "react";
import {createPortal} from "react-dom";

export default function Model({children,state}){
    const ref=useRef()
    useEffect(() => {
       if(state){
           ref.current.show()
        }
       else{
           ref.current.close()
       }
    }, [state]);

    return createPortal(
        <dialog ref={ref}>
            {open?children:null}
        </dialog>,
        document.getElementById("model")
    )
}