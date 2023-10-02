import React from "react";
import { useState, useReducer } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  return (
    <section id="test" className="h-screen">
        <div className="bg-white">
            <h1>{count}</h1>
            <button onClick={() => setCount((pre)=>pre+1)}>+</button>
        </div>
    </section>
  );
};

export default Test;