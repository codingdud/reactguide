import { useState } from "react";
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from "./components/Result";
function App() {
  const[input,setInput]=useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const valid=input.duration>=1;
  function handleChange(name,value){
    setInput((prev)=>{
      return {...prev,[name]:+value}
    })
  }
  return (<main>
    <Header/>
    <UserInput input={input} handleChange={handleChange}/>
    {valid?<Result input={input}/>:<p className="center">Enter Valid Duration</p>}
  </main>
  )
}

export default App
