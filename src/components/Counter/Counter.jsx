"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Counter Application</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-700"
        >
          -
        </button>
        <span className="text-3xl font-semibold">{count}</span>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
