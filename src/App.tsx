import "./App.css";
import { ClickHistory } from "./vending-machine/click-history";
import { VendingMachine } from "./vending-machine/vending-machine";

function App() {
  return (
    <>
      <VendingMachine />
      <ClickHistory />
    </>
  );
}

export default App;
