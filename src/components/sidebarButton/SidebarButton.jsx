import React from "react";

const QuestionButton = ({ questionNo, onClick, isFlagged, status, id }) => {
  return (
    <button
      className="flex items-center space-x-2 border-gray-100 border-solid border-2 rounded-xs"
      onClick={(e) => {
        onClick(id);
      }}
    >
      <span>{questionNo}</span>
      {}

      {isFlagged && "flagicon"}
    </button>
  );
};

export default QuestionButton;
