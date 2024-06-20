import { useCallback, useState } from 'react'
import QUESTION from '../questions'
import Summary from './Summary'
import Question from './Question'


export default function Quiz() {
   
    const [ans, setAns] = useState([])
    const active =  ans.length
    const isComplet = active === QUESTION.length-1

    const handleselectAnswer = useCallback(function handleselectAnswer(selectedAnswer) {
        setAns((prev) => {
            return [...prev, selectedAnswer]
        })

    }, [])
    const handleSkipAnswer = useCallback(() => handleselectAnswer(null), [handleselectAnswer])
    if (isComplet) {
        return (
            <Summary userAnswers={ans}/>
        )
    }
    return (
        <div id='quiz'>
            <Question
            key={active}
            index={active}
            onSlecteAnswer={handleselectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}
