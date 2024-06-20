import { useRef } from "react";

export default function Answers({answers,selectedAnswer,answerState,onselectAnswer}) {
    const suffleAnswer=useRef()
    if(!suffleAnswer.current){
        suffleAnswer.current = [...answers]
        suffleAnswer.current.sort(() => Math.random() - 0.5)
    }
  return (
    <ul id='answers'>{suffleAnswer.current.map(
        (answer) => {
            const isSlected=selectedAnswer===answer;
            let cssClasses='';
            if(answerState==='answered'&&isSlected){
                cssClasses='selected';
            }
            if((answerState==='correct'||answerState==='wrong')&&isSlected){
                cssClasses=answerState
            }
            console.log(cssClasses)
            return <li key={answer} className='answer'>
                <button onClick={() => onselectAnswer(answer)} 
                className={cssClasses} 
                disabled={answerState!==''}
                >{answer}</button>
            </li>
        }
    )}</ul>
  )
}
