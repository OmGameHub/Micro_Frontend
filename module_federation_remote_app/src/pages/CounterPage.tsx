import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen content-center text-center">
      <h1 className="text-2xl font-semibold">Remove Counter Page using Module Federation</h1>

      <div className="p-2">
        <button
          className="border-2 border-transparent rounded-lg p-2 text-white bg-gray-800 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
