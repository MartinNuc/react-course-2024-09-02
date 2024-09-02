import { useState } from "react";

type Props = {
  name: string;
};

export function VendingItem({ name }: Props) {
  const [availableCount, setAvailableCount] = useState(5);

  function handleClick() {
    if (availableCount <= 0) {
      return;
    }

    setAvailableCount(availableCount - 1);
  }

  return (
    <>
      <button onClick={handleClick}>{availableCount}x</button>
      {name}
    </>
  );
}
