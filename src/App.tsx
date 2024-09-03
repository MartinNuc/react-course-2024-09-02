import "./App.css";
import { Counter } from "./by_martin/counter";
import { NumberGenerator } from "./by_martin/number-generator";
import { VendingMachine } from "./vending-machine/vending-machine";

function App() {
  const jmeno = "Martin";

  return (
    <>
      <NumberGenerator pregeneratedCount={5} />
      <Counter></Counter>
      <h1>Hello {jmeno}</h1>
      <VendingMachine />
    </>
  );
}

export default App;
