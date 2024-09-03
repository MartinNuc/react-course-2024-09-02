import "./App.css";
import { ClickHistory } from "./vending-machine/click-history";
import { VendingMachine } from "./vending-machine/vending-machine";

function App() {
  const jmeno = "Martin";

  return (
    <>
      <h1>Hello {jmeno}</h1>
      <VendingMachine />
      <ClickHistory />
    </>
  );
}

export default App;
