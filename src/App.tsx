import { Table } from "./by_martin/table";

import './App.css';

function App() {
  const jmeno = "Martin";

  const input = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <h1>Hello {jmeno}</h1>
      <Table array={input} columns={3} />
    </>
  );
}

export default App;
