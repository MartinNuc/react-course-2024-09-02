import { useState } from "react";
	
type Props = {
  pregeneratedCount: number
}

export function NumberGenerator({pregeneratedCount}: Props) {

  const [generatedNumbers, setGeneratedNumbers] = useState<Array<number>>(
    () => [...new Array(pregeneratedCount)].map(() => Math.random())
  );

  function handleGenerateNew() {
    // DONT
    // generatedNumbers.push(Math.random());
    // setGeneratedNumbers(generatedNumbers);

    // DO
    setGeneratedNumbers([
      ...generatedNumbers,
      Math.random()
    ]);
  }

  return (
    <>
      <button onClick={handleGenerateNew}>Generate new</button>
      <ul>
        {generatedNumbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
    </>
  );
}
