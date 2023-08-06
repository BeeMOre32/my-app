import React, { useEffect, useState } from "react";
import CounterComponent from "../components/counter-component";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Counter</h1>
      <CounterComponent counter={counter} />
      <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-1</button>
    </div>
  );
}

export default Counter;
