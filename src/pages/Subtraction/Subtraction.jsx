/** @format */

import React from "react";
import { useState, useEffect } from "react";
import OptionsButton from "../../components/OptionsButton";
function Subtraction() {
  //generate number
  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  //generate problem and answer
  const generateProblem = () => {
    const num1 = generateNumber(1, 10);
    const num2 = generateNumber(1, 10);
    const answer = num1 - num2;

    return {
      num1,
      num2,
      answer,
    };
  };

  //use useState to display and update
  const [problem, setProblem] = useState(generateProblem());
  const [options, setOptions] = useState([]);

  //use useEffect to call the generateOption() every time the problem change
  useEffect(() => {
    generateOption();
  }, [problem]);

  //shuffle the array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  //generate option and return it as an array
  const generateOption = () => {
    const correctOption = problem.answer;
    const otherOption = [generateNumber(1, 20), generateNumber(1, 20)].filter(
      (option) => {
        return option !== correctOption;
      }
    );

    const allOption = [correctOption, ...otherOption];
    const shuffledOption = shuffleArray(allOption);
    setOptions(shuffledOption);
  };

  const handleOptionClick = (selectedOption) => {
    if (selectedOption == problem.answer) {
      setProblem(generateProblem());
    } else {
      alert("Incorrect try Again!");
    }
  };

  return (
    <>
      <main className="h-[86.6vh] w-[50wh] px-[100px] pt-5 bg-primary flex flex-col items-center">
        <div className="w-[1030px] h-[256px] bg-slate-300 rounded-[30px] border-[5px] border-accent flex justify-center items-center gap-[50px] shadow-lg">
          <span className="text-[150px] font-semibold text-primary">
            {problem.num1}
          </span>
          <span className="text-[150px] font-semibold text-secondary">-</span>
          <span className="text-[150px] font-semibold text-primary">
            {problem.num2}
          </span>
          <span className="text-[150px] font-semibold text-secondary">=</span>
          <span className="text-[150px] font-semibold text-red-600">?</span>
        </div>
        <div className="flex gap-[40px] mt-10">
          <OptionsButton
            options={options}
            handleOptionClick={handleOptionClick}
          />
        </div>
      </main>
    </>
  );
}

export default Subtraction;
