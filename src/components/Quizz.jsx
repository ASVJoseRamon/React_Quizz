import { useState } from "react";

export default function Quizz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    return(
        <p>CurrentQuestion</p>
    )
}