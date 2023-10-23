import React from "react";

import QuestionButton from "../components/sidebarButton/SidebarButton";

const Sidebar = ({ quiz, onSelect, selectedQuestion }) => {
  const onClick = (id) => {
    onSelect(id);
  };

  return (
    <div className="md:w-1/5 w-full">
      <div className="flex justify-between m-4 items-center  text-gray-600">
        <span> Questions </span>
        <span className="bg-gray-100 rounded-md text-xs font-semibold p-2">
          {quiz.length} questions
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-2">
        {quiz.map((item, index) => (
          <QuestionButton
            id={item.id}
            onClick={onClick}
            questionNo={index + 1}
            selectedQuestion={selectedQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
