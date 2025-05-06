import { questionsList } from "@/data/Questions"
import { useState } from "react"

export const Question = () => {

    const [selectedAnswer, setSelectedAnswer] = useState<string>("")
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [counter, setCounter] = useState<number>(0)
    const [isFinished, setIsFinished] = useState<boolean>(false)
    const [answerList, setAnswerList] = useState<string[]>([])

    const handleAnswerIsRight = (e: any) => {
        const answer = e.target.innerText
        const correctAnswer = questionsList[counter].answer

        setSelectedAnswer(answer)
        setIsCorrect(answer === correctAnswer)
        setAnswerList([...answerList, answer])

        setTimeout(() => {
            if (counter < questionsList.length - 1) {
                setCounter(counter + 1)
                setSelectedAnswer("")
                setIsCorrect(false)
            } else {
                setIsFinished(true)
            }
        }, 2000)
    }

    const handleRestartQuiz = () => {
        setCounter(0)
        setIsFinished(false)
        setAnswerList([])
        setSelectedAnswer("")
        setIsCorrect(false)
    }




    return (
        <div>
            {!isFinished && (
            <div>
                <h1 className="text-3xl font-bold my-2">{questionsList[counter].id} - {questionsList[counter].question}</h1>
                <ul>
                    {questionsList[counter].options.map((option, index) => (
                        <li onClick={handleAnswerIsRight} key={index} className="flex items-center gap-2">
                            <div className={`my-2 p-2 border border-gray-400 w-full bg-gray-200 rounded-md hover:outline cursor-pointer
                            ${selectedAnswer === option ? (isCorrect ? "bg-green-300 text-green-800" : "bg-red-300 text-red-800") : ""}
                            `}>{option}</div>
                        </li>
                    ))}
                </ul>
                <p className="text-center">{`${questionsList[counter].id} de ${questionsList.length} ${questionsList.length <= 1 ? "pergunta" : "perguntas"}`}</p>
            </div>
            )}

            {isFinished && (
                <div>
                    <h2 className="text-3xl font-bold my-2">Quiz finalizado!</h2>
                    <p className="text-lg">Suas respostas:</p>
                    <ul className="list-disc list-inside">
                        {questionsList.map((question, index) => (
                            <li key={index} className={"my-2 p-2 border border-gray-400 w-full bg-gray-200 rounded-md"}>
                                {question.question} - Sua resposta: {answerList[index]} - {question.answer === answerList[index] ? "Correta" : "Incorreta"}
                            </li>
                        ))}
                    </ul>
                    <hr className="border-gray-400"/>
                    <div className="flex items-center justify-center mt-2">
                    <button onClick={handleRestartQuiz} className="p-2 bg-sky-500 text-white rounded-md cursor-pointer border border-white hover:border-blue-700">Reiniciar Quiz</button>
                    </div>
                </div>
            )}
        </div>
    )
}