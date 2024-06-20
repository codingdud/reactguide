import compleImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions'
export default function Summary({userAnswers}) {
    const skippedAnswers=userAnswers.filter(answer=>answer===null)
    const correctAnswers=userAnswers.filter(
        (answer,index)=>answer===QUESTIONS[index].answers[0])
    const skippedShare=Math.round((skippedAnswers.length/userAnswers.length)*100)
    const correctShare=Math.round((correctAnswers.length/userAnswers.length)*100)
  return (
    <div id='summary'>
                <img src={compleImg} alt='complet quiz' />
                <h2>Quiz complet</h2>
                <div id='summary-stats'>
                    <p>
                        <span className='number'>{skippedShare}%</span>
                        <span className='text'>skipped</span>
                    </p>
                    <p>
                        <span className='number'>{correctShare}%</span>
                        <span className='text'>answered correctly</span>
                    </p>
                    <p>
                        <span className='number'>{100-correctShare-skippedShare}%</span>
                        <span className='text'>answered incorrectly</span>
                    </p>
                </div>
                <ol>
                    {userAnswers.map((answer,index)=>{
                        let cssClasses='user-answer'
                        if(answer===null){
                            cssClasses+=' skipped'
                        }
                        else if(answer===QUESTIONS[index].answers[0]){
                            cssClasses+=' correct'
                        }else{
                            cssClasses+=' wrong'
                        }
                        return(
                        <li key={answer}>
                            <h3>{index+1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClasses}>{answer??'Skipped'}</p>
                        </li>
                        )
                    })}
                    
                </ol>
            </div>
  )
}
