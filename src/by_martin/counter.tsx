import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return <button onClick={handleIncrement}>{count}</button>;
}
