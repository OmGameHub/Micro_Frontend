"use client";
import { useState } from "react";

const Home = () => {
  const [bgColor, setBgColor] = useState("#242424");

  const getRandomHexColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-center">
        <div className="p-4 bg-gray-800/30 mb-20 rounded-lg">
          <h1 className="text-4xl font-bold text-white mb-1">
            Remove Random Color Page using Iframe (NextJs)
          </h1>

          <p className="text-xl font-bold">
            Color code: <span className="font-normal">{bgColor}</span>
          </p>
        </div>

        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
          onClick={() => setBgColor(getRandomHexColor())}
        >
          Change Background Color
        </button>
      </div>
    </div>
  );
}


export default Home;