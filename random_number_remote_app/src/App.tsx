import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 100) + 1;
  };

  return (
    <>
      <h1>Remove Random Number Page using Web Component</h1>

      <div className="card">
        <button onClick={() => setNumber(getRandomNumber())}>
          Random number is {number}
        </button>
      </div>
    </>
  );
}

export default App;
