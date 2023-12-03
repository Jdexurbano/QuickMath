/** @format */

import React from "react";
import { useState, useEffect } from "react";
import OptionsButton from "../../components/OptionsButton";
function Divison() {
  const generateNumber = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;

    //if number is odd change it to even numbers
    if (randomNumber % 2 !== 0) {
      randomNumber += 1;
    }
    return randomNumber;
  };

  //generate problem and answer
  const generateProblem = () => {
    let num1 = generateNumber(1, 10);
    let num2 = generateNumber(1, 10);
    let temp;

    //swap the value if the num2 to is > to num1
    if (num2 > num1) {
      temp = num2;
      num2 = num1;
      num1 = temp;
    }
    const answer = num1 / num2;
    //roundof the answer into 2 decimal point
    const finalAnswer = Math.round(answer * 100) / 100;

    return {
      num1,
      num2,
      finalAnswer,
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
    const correctOption = problem.finalAnswer;
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
    if (selectedOption == problem.finalAnswer) {
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
          <span className="text-[150px] font-semibold text-secondary">/</span>
          <span className="text-[150px] font-semibold text-primary">
            {problem.num2}
          </span>
          <span className="text-[150px] font-semibold text-secondary">=</span>
          <span className="text-[150px] font-semibold text-red-600">
            {problem.finalAnswer}
          </span>
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

export default Divison;
