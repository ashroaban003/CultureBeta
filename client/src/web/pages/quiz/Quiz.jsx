import React, { useState } from 'react';
import './quiz.css'
import Navbar from '../../components/navbar/Navbar';
export default function Quiz() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    let i=2;
    const [q_no, setq_no] = useState(0);
    const [score, setscore] = useState(0);
    const [showscore, setshowscore] = useState(false);
    const handleAnswer = (Lan) => {
        if(Lan===true){
            alert("Correct Answer");
            const newscore = score + 1;
            setscore(newscore);
        }
        else{
            alert("Wrong Answer");
        }
        const next_q_no = q_no + 1;
        if(next_q_no<questions.length){
            setq_no(next_q_no);
        }
        else{
            setshowscore(true);
            //alert("You have completed the quiz");
        }
    }
	return (
        <div>
         <Navbar/>
		<div className='login'>
           <div className='quizcnt flexColCenter'> 
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showscore ? (
				<div className='secondaryTex'>You scored {score} out of {questions.length}</div>
			) : (
				<div className='dummy'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {q_no+1}/4</span>
						</div>
						<div className="qsizedbox"></div>
						<div className='question-text secondaryTex'>{questions[q_no].questionText}</div>
						<div className="qsizedbox"></div>
						<div className='answer-section'>
						{questions[q_no].answerOptions.map((Lan)=>(
                            <div className="buttoncls "><button onClick={()=>handleAnswer(Lan.isCorrect)}>{Lan.answerText}</button></div>
                        ))}
					</div>
					</div>
		
				</div>
			)}
		</div>
        </div>
        </div>
	);
}