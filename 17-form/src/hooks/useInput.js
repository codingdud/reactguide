import { useState } from "react";

export default function useInput(defaultValue,validFunc) {
    const [enterValue,setEnterValue]=useState(defaultValue)
    const [didEdit,setDidEdit] = useState(false)

    const isValid=validFunc(enterValue);
    function handleEnterValue(event){
        setEnterValue(event.target.value)
        setDidEdit(false)
      }
      function handleInputBlure(){
        setDidEdit(true)
      }
      return{
        value:enterValue,
        handleInputBlure,
        handleEnterValue,
        hasError:didEdit&&!isValid
      }
}
