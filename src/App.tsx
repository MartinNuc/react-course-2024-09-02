import './App.css';
import { Counter } from './by_martin/counter';
import { VendingMachine } from "./vending-machine/vending-machine";

function App() {
  const jmeno = "Martin";

  return (
    <>
    <Counter></Counter>
      <h1>Hello {jmeno}</h1>
      <VendingMachine />
    </>
  );
}

export default App;
