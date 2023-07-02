import { useState } from "react";
import "./App.css";
import UnitDropdown from "./Components/UnitDropdown";

function App() {
  const [input, setInput] = useState("10");
  const [output, setOutput] = useState("");

  const [selectedInput, setSelectedInput] = useState("cm");
  const [selectedOutput, setSelectedOutput] = useState("m");

  const convert = () => {
    // the + thing turns it into a number
    let result = +input;
    // this is to check if this conversion was succesful
    let succesful = true;

    if (result < 0) succesful = false;

    switch (selectedInput) {
      case "cm":
        if (selectedOutput == "m") result /= 1000;
        // if all these checks fail we just make the output empty
        else succesful = false;
        break;

      case "m":
        if (selectedOutput == "cm") result *= 1000;
        else succesful = false;
        break;

      case "g":
        if (selectedOutput == "kg") result /= 1000;
        else succesful = false;
        break;

      case "kg":
        if (selectedOutput == "g") result *= 1000;
        else succesful = false;
        break;

      case "ml":
        if (selectedOutput == "l") result /= 1000;
        else if (selectedOutput == "m3") result /= 1000 * 1000;
        else succesful = false;
        break;

      case "l":
        if (selectedOutput == "ml") result *= 1000;
        else if (selectedOutput == "m3") result /= 1000;
        else succesful = false;
        break;

      case "m3":
        if (selectedOutput == "ml") result *= 1000 * 1000;
        else if (selectedOutput == "l") result *= 1000;
        else succesful = false;
        break;

      default:
        return;
    }

    if (succesful) setOutput(result.toString());
    else setOutput("");
  };

  const handleInputDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInput(event.target.value);
  };

  const handleOutputDropdown = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOutput(event.target.value);
  };

  return (
    <>
      <body>
        <div className="Input">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <select value={selectedInput} onChange={handleInputDropdown}>
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
            <option value="l">l</option>
            <option value="m3">m3</option>
          </select>
        </div>
        <div className="Output">
          <p>{output}</p>
          <select value={selectedOutput} onChange={handleOutputDropdown}>
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
            <option value="l">l</option>
            <option value="m3">m3</option>
          </select>
        </div>
        <button onClick={convert}>Convert</button>
      </body>
    </>
  );
}

export default App;
