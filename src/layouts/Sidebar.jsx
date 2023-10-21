import React, { useState } from "react";

import QuestionButton from "../components/sidebarButton/SidebarButton";

const Sidebar = ({ quiz, onSelect, selectedQuestion }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClick = (id) => {
    onSelect(id);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-1/5">
      <div className="flex items-center justify-between p-4">
        <div className="text-white text-2xl">Sidebar</div>
        <button
          className="text-white focus:outline-none hover:text-gray-400"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
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
