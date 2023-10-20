import './App.css';
import quiz from "./modal/quiz.json"

import Question from './components/question/Question';
import Answer from './components/answer/Answer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { populateInitialState } from './slice/question';

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    const getAttempts = (type, answerData) => {
      if (type !== "free") {
        return answerData.length;
      } else {
        return Math.random() * 10;
      }
    }

    const getAnswer = (type, answerData) => {
      switch (type) {
        case "multiple":
          return [];
        case "sort":
          return answerData.map(item => ({ id: `item-${item.answer}`, content: item.answer }));

        case "matrix_sort":
          return answerData.map(item => ({ id: `item-${item.right}`, content: item.right }));

        default:
          return "";
      }
    }


    dispatch(populateInitialState(quiz.map(item => (
      {
        questionID: item.id,
        answer: getAnswer(item.answerType, item.answerData),
        attempts: getAttempts(item.answerType, item.answerData),
        flagged: false
      }

    ))))


  }, [dispatch])


  return (

    <div className="App">
      {quiz.map((item, index) => {
        return (
          <div key={index}>
            <Question questionDescription={item.question} questionNo={index + 1} />
            <Answer id={item.id} answerData={item.answerData} type={item.answerType} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
