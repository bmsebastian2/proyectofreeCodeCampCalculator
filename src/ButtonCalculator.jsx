import React from "react";

const ButtonCalculator = ({ addNumber }) => {
  const buttonLetter = [
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ];

  const drawButton = (name) => (
    <button key={name[1]} id={name[0]} onClick={() => addNumber(name[1])}>
      {name[1]}
    </button>
  );
  const listButton = (arr) => arr.map((element) => drawButton(element));

  return (
    <div style={{ border: "1px solid red", width: "20vw" }}>
      {listButton(buttonLetter)}
    </div>
  );
};

export default ButtonCalculator;
