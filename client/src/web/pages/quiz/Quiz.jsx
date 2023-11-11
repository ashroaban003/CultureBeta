import React, { useState } from 'react';
import './quiz.css'; // Import the CSS file
import Navbar from '../../components/navbar/Navbar';
// import { motion } from 'framer-motion';

export default function Quiz() {
	const questions = [
		{
		  questionText: 'What is the national animal of India?',
		  answerOptions: [
			{ answerText: 'Lion', isCorrect: false },
			{ answerText: 'Tiger', isCorrect: true },
			{ answerText: 'Elephant', isCorrect: false },
			{ answerText: 'Leopard', isCorrect: false },
		  ],
		},
		{
		  questionText: 'Which river is known as the "Ganges" in India?',
		  answerOptions: [
			{ answerText: 'Yamuna', isCorrect: false },
			{ answerText: 'Brahmaputra', isCorrect: false },
			{ answerText: 'Indus', isCorrect: false },
			{ answerText: 'Ganga', isCorrect: true },
		  ],
		},
		{
		  questionText: 'What is the capital of India?',
		  answerOptions: [
			{ answerText: 'Mumbai', isCorrect: false },
			{ answerText: 'New Delhi', isCorrect: true },
			{ answerText: 'Kolkata', isCorrect: false },
			{ answerText: 'Bangalore', isCorrect: false },
		  ],
		},
		{
		  questionText: 'Which Indian festival is known as the "Festival of Lights"?',
		  answerOptions: [
			{ answerText: 'Holi', isCorrect: false },
			{ answerText: 'Diwali', isCorrect: true },
			{ answerText: 'Navratri', isCorrect: false },
			{ answerText: 'Dussehra', isCorrect: false },
		  ],
		},
		// Additional Indian culture questions:
		{
		  questionText: 'Who is known as the "Father of the Nation" in India?',
		  answerOptions: [
			{ answerText: 'Subhas Chandra Bose', isCorrect: false },
			{ answerText: 'Jawaharlal Nehru', isCorrect: false },
			{ answerText: 'Sardar Patel', isCorrect: false },
			{ answerText: 'Mahatma Gandhi', isCorrect: true },
		  ],
		},
		{
		  questionText: 'What is the national flower of India?',
		  answerOptions: [
			{ answerText: 'Rose', isCorrect: false },
			{ answerText: 'Sunflower', isCorrect: false },
			{ answerText: 'Lotus', isCorrect: true },
			{ answerText: 'Tulip', isCorrect: false },
		  ],
		},
		{
		  questionText: 'Which Indian state is famous for its backwaters and houseboats?',
		  answerOptions: [
			{ answerText: 'Kerala', isCorrect: true },
			{ answerText: 'Goa', isCorrect: false },
			{ answerText: 'Rajasthan', isCorrect: false },
			{ answerText: 'Himachal Pradesh', isCorrect: false },
		  ],
		},
		{
		  questionText: 'What is the traditional Indian art of folding paper to make intricate designs called?',
		  answerOptions: [
			{ answerText: 'Origami', isCorrect: false },
			{ answerText: 'Henna', isCorrect: false },
			{ answerText: 'Rangoli', isCorrect: false },
			{ answerText: 'Kirigami', isCorrect: true },
		  ],
		},
		{
		  questionText: 'Which dance form is known as the "Classical Dance of India"?',
		  answerOptions: [
			{ answerText: 'Bharatanatyam', isCorrect: true },
			{ answerText: 'Kathak', isCorrect: false },
			{ answerText: 'Salsa', isCorrect: false },
			{ answerText: 'Ballet', isCorrect: false },
		  ],
		},
	  ];
	  

  const [q_no, setq_no] = useState(0);
  const [score, setscore] = useState(0);
  const [showscore, setshowscore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      const newscore = score + 1;
      setscore(newscore);
    }

    const next_q_no = q_no + 1;
    if (next_q_no < questions.length) {
      setq_no(next_q_no);
    } else {
      setshowscore(true);
    }
  }

  const currentWidth = () =>{
	return ((q_no+1)/questions.length)*48;
  }

  return (
    <div style={{height:"100vh"}}>
      <Navbar />
      <div className='quiz-container'>
		  <div className="quiz-container-main">
		  <div className="questionProgress" style={{
			  width: currentWidth()+"%"
		  }}>

		  </div>
        {showscore &&
          <div
            className='score-section'
            // initial={{ x: -100, opacity: 0 }}
            //   animate={{ x: 0, opacity: 1 }}
            //   transition={{ duration: 0.5 }}
          >
            <div className='secondary-text'>
              You scored {score} out of {questions.length}
            </div>
          </div>
        }   
        {!showscore &&
          <div className='question-section'>
			  <div className='question'>
            <div className='question-count'>
              <span>Question {q_no + 1}/{questions.length}</span>
            </div>
            <div
              className='question-text'
            //   initial={{ x: -100, opacity: 0 }}
            //   animate={{ x: 0, opacity: 1 }}
            //   transition={{ duration: 0.5 }}
            >
              {questions[q_no].questionText}
            </div>
			</div>
            <div className='answer-section'>
              {questions[q_no].answerOptions.map((option, index) => (
                <div
                //   key={index}
                //   initial={{ x: -100, opacity: 0 }}
                //   animate={{ x: 0, opacity: 1 }}
                //   transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='button-container'
                >
                  <button className="quizButtons" onClick={() => handleAnswer(option.isCorrect)}>
                    {option.answerText}
                  </button>
                </div>
              ))}
            </div>
          
		  
		  </div>
        }

</div>
      </div>
    </div>
  );
}
