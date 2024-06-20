import { useState,useEffect } from "react";
export default function QuestionTimer({timeout,onTimeout,mode}) {
    const [time,setTime]=useState(timeout)
    useEffect(() => {
        console.log('SETTING TIMEOUT')
        const timeclear=setTimeout(onTimeout , timeout);
        return ()=>{clearTimeout(timeclear)}
    }, [timeout,onTimeout])
    
    
    useEffect(() => {
        console.log('SETTING INTERVAL',time)
        const timeleft=setInterval(() => {
            setTime((prev)=>prev-100)
        }, 100);
        return ()=>{
          clearInterval(timeleft)
        }
    }, [])
    //console.log("time=>",time)
  return (
    <progress id='question-time' value={time} max={timeout} className={mode}/>
  )
}
