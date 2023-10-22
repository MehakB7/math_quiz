import React from "react";

import QuestionButton from "../components/sidebarButton/SidebarButton";

const Sidebar = ({ quiz, onSelect, selectedQuestion }) => {
  const onClick = (id) => {
    onSelect(id);
  };

  return (
    <div className="w-1/5">
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
