import { useEffect,useState } from "react";
const TIMER = 3000;
export default function ProgressBar({timer}) {
    const [rm, setRm] = useState(timer)
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("interval log!")
            setRm((prev) => prev - 100)
        }, 100)
        return () => { clearInterval(interval) };
    }, [])
    return (
        <progress value={rm} max={TIMER} />
    )
}
