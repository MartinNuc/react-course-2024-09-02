import "./App.css";
import { Joke } from "./jokes/joke";
import { ClickHistory } from "./vending-machine/click-history";
import { VendingMachine } from "./vending-machine/vending-machine";

function App() {
  return (
    <>
      <Joke />
      <VendingMachine />
      <ClickHistory />
    </>
  );
}

export default App;
