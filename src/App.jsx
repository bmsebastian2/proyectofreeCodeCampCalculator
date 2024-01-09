import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("0");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    if (display === "0" || result !== "") {
      setDisplay(number.toString());
      setResult("");
    } else {
      setDisplay(display + number);
    }
    setInput(input + number);
  };

  const handleOperatorClick = (operator) => {
    const sanitizedInput = input.replace(/([-+*/])\1+/g, "$1");

    setInput(sanitizedInput + operator);
    setDisplay(operator);
    setResult("");
  };

  const handleDecimalClick = () => {
    // if (input === "" || /\D$/.test(input)) {
    //   setInput(input + ".");
    //   setDisplay(".");
    // }
    if (input === "" || /\D$/.test(input) || /\.\d*\./.test(input)) {
      // Do nothing if the input is empty, ends with a non-digit character,
      // or already contains a decimal point followed by another digit
      return;
    }

    setInput(input + ".");
    setDisplay(display + ".");
  };

  const handleClearClick = () => {
    setDisplay("0");
    setInput("");
    setResult("");
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(input).toString());
      setDisplay(eval(input).toString());
      setInput("");
    } catch (error) {
      setDisplay("Error");
      setInput("");
      setResult("");
    }
  };

  return (
    <main className="calculator">
      <div id="display" className="display">
        {display}
      </div>
      <button id="clear" onClick={handleClearClick}>
        C
      </button>
      <button id="divide" onClick={() => handleOperatorClick("/")}>
        /
      </button>
      <button id="multiply" onClick={() => handleOperatorClick("*")}>
        *
      </button>
      <button id="seven" onClick={() => handleNumberClick(7)}>
        7
      </button>
      <button id="eight" onClick={() => handleNumberClick(8)}>
        8
      </button>
      <button id="nine" onClick={() => handleNumberClick(9)}>
        9
      </button>
      <button id="subtract" onClick={() => handleOperatorClick("-")}>
        -
      </button>
      <button id="four" onClick={() => handleNumberClick(4)}>
        4
      </button>
      <button id="five" onClick={() => handleNumberClick(5)}>
        5
      </button>
      <button id="six" onClick={() => handleNumberClick(6)}>
        6
      </button>
      <button id="add" onClick={() => handleOperatorClick("+")}>
        +
      </button>
      <button id="one" onClick={() => handleNumberClick(1)}>
        1
      </button>
      <button id="two" onClick={() => handleNumberClick(2)}>
        2
      </button>
      <button id="three" onClick={() => handleNumberClick(3)}>
        3
      </button>
      <button id="equals" onClick={handleEqualClick}>
        =
      </button>
      <button id="zero" onClick={() => handleNumberClick(0)}>
        0
      </button>
      <button id="decimal" onClick={handleDecimalClick}>
        .
      </button>
    </main>
  );
};

export default App;

// export default App;

// import { useState } from "react";
// import "./App.css";
// import ButtonCalculator from "./ButtonCalculator";
// export default function App() {
//   const [valorEntrada, setValorEntrada] = useState("");
//   const [valorSalida, setValorSalida] = useState("");
//   const [display, setDisplay] = useState(0);

//   const clearEver = () => {
//     setValorEntrada(0);
//     setValorSalida(0);
//     setDisplay(0);
//   };
//   const addNumber =(number)=>setDisplay(...display,number)

//   return (
//     <main>
//       <h1>What happen</h1>
//       <button id="equals" onClick={() => console.log("=")}>
//         =
//       </button>
//       <ButtonCalculator addNumber={addNumber} />
//       {["add", "subtract", "multiply", "divide"].map((element) => (
//         <button key={element} id={element}>
//           {element}
//         </button>
//       ))}
//       <button id="decimal">.</button>
//       <button id="clear" onClick={() => clearEver()}>
//         cl
//       </button>
//       <h3 id="display">{display}</h3>
//     </main>
//   );
// }
