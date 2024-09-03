import "./App.css";
import { AutomaticCounter } from "./by_martin/automatic-counter";
import { Counter } from "./by_martin/counter";
import { MousePosition } from "./by_martin/mouse-position";
import { NumberGenerator } from "./by_martin/number-generator";
import { VendingMachine } from "./vending-machine/vending-machine";

function App() {
  const jmeno = "Martin";

  return (
    <>
      <AutomaticCounter />
      <MousePosition />
      <NumberGenerator pregeneratedCount={5} />
      <Counter></Counter>
      <h1>Hello {jmeno}</h1>
      <VendingMachine />
    </>
  );
}

export default App;
