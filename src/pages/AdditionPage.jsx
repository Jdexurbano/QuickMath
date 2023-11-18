import React from "react";
import { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
function AdditionPage() {
  //generate and return the problem and the answer
  const generateProblem = () => {
    const num1 = generateNumber(1, 10);
    const num2 = generateNumber(1, 10);
    const answer = num1 + num2;

    return {
      num1,
      num2,
      answer,
    };
  };

  //generate and return a random number
  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const [problem, setProblem] = useState(generateProblem());
  const [options, setOptions] = useState([]);

  useEffect(() => {
    generateOption();
  }, [problem]);

  //shuffle the item in the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], (array[j] = array[j]), array[i]];
    }

    return array;
  };

  //generate an option and return it as an array
  const generateOption = () => {
    const correctOption = problem.answer;
    const otherOption = [generateNumber(1, 20), generateNumber(1, 20)].filter(
      (option) => {
        return option !== correctOption;
      }
    );
    const allOption = [correctOption, ...otherOption];
    console.log(allOption);
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
      <main className="h-screen w-screen px-[100px] pt-14 bg-primary flex flex-col items-center">
        <div className="w-[1030px] h-[256px] bg-slate-300 rounded-[30px] border-[5px] border-accent flex justify-center items-center gap-[50px] shadow-lg">
          <span className="text-[150px] font-semibold text-primary">
            {problem.num1}
          </span>
          <span className="text-[150px] font-semibold text-secondary">+</span>
          <span className="text-[150px] font-semibold text-primary">
            {problem.num2}
          </span>
          <span className="text-[150px] font-semibold text-secondary">=</span>
          <span className="text-[150px] font-semibold text-red-600">?</span>
        </div>
        <div className="flex gap-[40px] mt-10">
          <Buttons options={options} handleOptionClick={handleOptionClick} />
        </div>
      </main>
    </>
  );
}

export default AdditionPage;
