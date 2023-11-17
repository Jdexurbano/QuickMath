import React from "react";

function Buttons({ options, handleOptionClick }) {
  return (
    <>
      {options.map((option) => {
        return (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className="w-[337px] h-[138px] bg-secondary text-[90px] font-semibold text-accent rounded-[10px] shadow-lg"
          >
            {option}
          </button>
        );
      })}
    </>
  );
}

export default Buttons;
