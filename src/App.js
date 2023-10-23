import './App.css';
import quiz from "./modal/quiz.json"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { populateInitialState } from './slice/question';
import Main from './layouts/Main';
import Sidebar from './layouts/Sidebar';
import { QuestionStatus } from './helper/constant';
import { shuffleArray } from './helper/utils';

function App() {

  const dispatch = useDispatch();

  const [selectedQuestion, setSelectedQuestion] = useState("");


  useEffect(() => {
    const getAttempts = (type, answerData) => {
      if (type !== "free" && type !== "cloze") {
        return answerData.length - 1;
      } else {
        return 3;

      }
    }

    const getAnswer = (type, answerData) => {
      switch (type) {
        case "multiple":
          return [];
        case "sort":
          return shuffleArray(answerData.map(item => ({ id: `item-${item.answer}`, content: item.answer })));

        case "matrix_sort":
          return shuffleArray(answerData.map(item => ({ id: `item-${item.right}`, content: item.right })));

        case "cloze":
          return [];

        default:
          return "";
      }
    }

    dispatch(populateInitialState(quiz.map(item => (
      {
        questionID: item.id,
        answer: getAnswer(item.answerType, item.answerData),
        attempts: getAttempts(item.answerType, item.answerData),
        flagged: false,
        status: QuestionStatus.NotAttempted
      }

    ))))


    if (quiz.length > 0) {
      setSelectedQuestion(quiz[0].id);

    }


  }, [dispatch])


  return (

    <div className="flex h-screen">
      <Sidebar quiz={quiz} onSelect={setSelectedQuestion} selectedQuestion={selectedQuestion} />
      <Main quiz={quiz} selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion} />

    </div>
  );
}

export default App;
