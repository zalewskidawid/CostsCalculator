import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1 && userInput.expectedReturn >= 1 && userInput.annualInvestment >= 1 && userInput.initialInvestment >= 1;
  
  function handleChange(newValue, inputIdentifier) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  return (
    <>
    <Header></Header>
    <UserInput onChange={handleChange} userInput={userInput}></UserInput>
    {!inputIsValid && <p className="center">Please enter valid input data.</p>}
    {inputIsValid && <Results input={userInput}></Results>}
    </>
  )
}

export default App
