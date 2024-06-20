import { useEffect } from 'react';
const PrgressBar:React.FC<{time:number,setTime:(prev:any)=>null}>=({time,setTime})=>{
    const maxTime: number = 100;
    useEffect(() => {
        console.log('SETTING INTERVAL', time)
        const interval = setInterval(() => {
            if(time < maxTime){
                setTime((prev:any) => prev + 1)
            }else{
                clearInterval(interval);
            }
        }, 100)
        return ()=>{
            console.log("end->",time)
            clearInterval(interval)
        }
    }, [time])
    return (<>
        <progress id='prog' value={time} max={maxTime}/><span>{time}%</span>
    </>
    )
}
export default PrgressBar;