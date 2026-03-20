import img from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={img} alt="Quiz Logo" />
            <h1>React Quizz App</h1>
        </header>
    );
}