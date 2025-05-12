import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 5,
    duration: 10,
  });

  const isValidDuration = userInput.duration > 1;

  function handleInputChange(selectedInput, changedValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [selectedInput]: +changedValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleInputChange} />
      {!isValidDuration && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {isValidDuration && <Results userInput={userInput} />}
    </>
  );
}

export default App;
