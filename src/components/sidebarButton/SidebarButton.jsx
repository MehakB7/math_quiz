import React from "react";
import {
  selectedBookmark,
  wrong,
  correct,
  progress,
  selected,
} from "../../helper/iconPath";
import { QuestionStatus } from "../../helper/constant";
import { useSelector } from "react-redux";

const QuestionButton = ({ questionNo, onClick, id, selectedQuestion }) => {
  const questions = useSelector((state) => state.questions);
  const question = questions?.find((item) => item.questionID === id);

  if (questions.length === 0) {
    return null;
  }

  const getButton = () => {
    if (selectedQuestion === id) {
      return selected;
    }

    switch (question?.status) {
      case QuestionStatus.Passed:
        return correct;
      case QuestionStatus.NotAttempted:
        return progress;
      default:
        return wrong;
    }
  };

  return (
    <button
      className={`flex items-center space-x-2 border-gray-200 border-solid border-2 rounded-md p-1 ${
        selectedQuestion === id ? "border-blue-500" : ""
      }`}
      onClick={(e) => {
        onClick(id);
      }}
    >
      {<img src={getButton()} alt="icon" />}
      <span className="font-semibold">{questionNo}</span>
      {question.flagged && <img src={selectedBookmark} alt="bookmark" />}
    </button>
  );
};

export default QuestionButton;
