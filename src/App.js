import './App.css';
import quiz from "./modal/quiz.json"

import Question from './components/question/Question';

function App() {
  return (
    <div className="App">
      {quiz.map((item, index) => {
        return <Question questionDescription={item.question} questionNo={index + 1} />
      })}
    </div>
  );
}

export default App;
