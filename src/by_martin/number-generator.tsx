import { useState } from "react";
	
type Props = {
  pregeneratedCount: number
}

export function NumberGenerator({pregeneratedCount}: Props) {

  const [generatedNumbers, setGeneratedNumbers] = useState<Array<number>>(
    () => [...new Array(pregeneratedCount)].map(() => Math.random())
  );

  const [isVisible, setIsVisible] = useState(false);
  const [availableCount, setAvailableCount] = useState(5);

  function handleGenerateNew() {
    // DONT
    console.log('generatedNumbers', generatedNumbers);
    debugger
    generatedNumbers.push(Math.random());
    setGeneratedNumbers(generatedNumbers);

    // DO
    // setGeneratedNumbers([
    //   ...generatedNumbers,
    //   Math.random()
    // ]);
  }

  return (
    <>
      <button onClick={handleGenerateNew}>Generate new</button>
      <ul>
        {generatedNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </>
  );
}
