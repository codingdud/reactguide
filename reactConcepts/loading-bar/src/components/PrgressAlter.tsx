import { useEffect,  } from "react"

export default function PrgressAlter() {
    useEffect(()=>{
        return ()=>console.log("hello")
    },[])
    
  return (
    <div>hello</div>
  )
}
