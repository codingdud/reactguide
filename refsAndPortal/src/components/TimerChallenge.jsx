import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({title,targetTime}){

    const timer=useRef()
    const dialog=useRef()
    const [remaningTime,setRemaningTime]=useState(targetTime*1000)
    const timerIsActive=remaningTime>0&&remaningTime<targetTime*1000

    if (remaningTime<=0){
        clearInterval(timer.current)
        dialog.current.open()
    }
    function handleStart(){
        timer.current=setInterval(()=>{
           setRemaningTime(prev=>prev-10)
        },10);
    }
    function handleResetTime(){
        setRemaningTime(targetTime*1000)
    }
    function handleStop(){
        dialog.current.open()
        clearInterval(timer.current)
    }
    return(<>
    <ResultModel ref={dialog} 
    targetTime={targetTime} 
    remaningTime={remaningTime} 
    onReset={handleResetTime}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
            {targetTime} second{targetTime>1?'s':''}
            </p>
            <p>
                <button onClick={timerIsActive?handleStop:handleStart}>
                    {timerIsActive?"stop":"start"} Challenge
                </button>
            </p>
            <p className={timerIsActive?"active":undefined}>
                {timerIsActive?'Time is running ...':'Time inactive'}
            </p>
        </section>
        </>)
}