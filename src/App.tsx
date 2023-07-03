import { useState } from "react";
import "./App.css";
import UnitDropdownOptions from "./Components/UnitDropdown";

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

    console.log(selectedInput + "," + selectedOutput);

    if (result < 0) succesful = false;

    switch (selectedInput) {
      case "cm":
        if (selectedOutput == "m") result /= 1000;
        else if (selectedOutput == "km") result /= 1000 * 1000;
        // if all these checks fail we just make the output empty
        else succesful = false;
        break;

      case "m":
        if (selectedOutput == "cm") result *= 1000;
        else if (selectedOutput == "km") result /= 1000;
        else succesful = false;
        break;

      case "km":
        if (selectedOutput == "cm") result *= 1000 * 1000;
        else if (selectedOutput == "m") result *= 1000;
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
        <h2>From</h2>
        <div className="Input">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && convert()}
          />
          <select value={selectedInput} onChange={handleInputDropdown}>
            <UnitDropdownOptions />
          </select>
        </div>
        <h2>To</h2>
        <div className="Output">
          <input value={output} type="number " disabled />
          <select value={selectedOutput} onChange={handleOutputDropdown}>
            <UnitDropdownOptions />
          </select>
        </div>
        <button onClick={convert}>Convert</button>
      </body>
    </>
  );
}

export default App;
