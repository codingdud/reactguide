
import { useState } from 'react'
import PrgressBar from './components/PrgressBar'
import PrgressAlter from './components/PrgressAlter'

function App():React.JSX.Element {
  const [time, setTime] = useState(0)
  
  //console.log('SETTING INTERVAL',time)
  return (
    <>
    <div className="container">
      <h1>Wellcome to loader Example</h1>
    </div>
    <div>
      {<PrgressBar time={time} setTime={setTime}/>}
      {/* <PrgressAlter/> */}
    </div>
    </>
  )
}

export default App
